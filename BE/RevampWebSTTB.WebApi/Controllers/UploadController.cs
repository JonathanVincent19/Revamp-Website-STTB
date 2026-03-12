using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")] // Routes to /api/v1/upload
    [Authorize] // Requires valid JWT
    public class UploadController : ControllerBase
    {
        private readonly IHostEnvironment _env;

        public UploadController(IHostEnvironment env)
        {
            _env = env;
        }

        [HttpPost]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            // 1. Basic validation
            if (file == null || file.Length == 0)
            {
                return BadRequest(new { Success = false, Message = "No file received." });
            }

            // 2. Size limitation validation (e.g. max 5MB)
            const long maxFileSize = 5 * 1024 * 1024; // 5 MB
            if (file.Length > maxFileSize)
            {
                return BadRequest(new { Success = false, Message = "File size exceeds the 5MB limit." });
            }

            // 3. Extension validation
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".pdf" };
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            
            if (string.IsNullOrEmpty(extension) || Array.IndexOf(allowedExtensions, extension) < 0)
            {
                return BadRequest(new { Success = false, Message = "Invalid file type. Only JPG, JPEG, PNG, GIF, and PDF are allowed." });
            }

            try
            {
                // 4. Determine save path (wwwroot/uploads or ContentRoot/uploads)
                // Using ContentRootPath + "uploads" to keep it independent of wwwroot for APIs
                string uploadsFolder = Path.Combine(_env.ContentRootPath, "uploads");

                // Ensure the uploads directory exists
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                // 5. Generate distinct filename to prevent overwrites
                string uniqueFileName = $"{Guid.NewGuid()}{extension}";
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                // 6. Save physical file asynchronously
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                // 7. Return the strict URL the client can resolve (e.g., /uploads/abcd-123.jpg)
                string relativeUrl = $"/uploads/{uniqueFileName}";

                return Ok(new 
                { 
                    Success = true, 
                    Message = "File uploaded successfully.", 
                    Url = relativeUrl 
                });
            }
            catch (Exception ex)
            {
                // Simple logging/return if things fail due to permissions, disk space, etc.
                return StatusCode(500, new { Success = false, Message = $"Internal server error: {ex.Message}" });
            }
        }
    }
}
