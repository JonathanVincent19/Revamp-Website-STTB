using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class CreateLecturerCommandHandler : IRequestHandler<CreateLecturerCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public CreateLecturerCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(CreateLecturerCommand request, CancellationToken cancellationToken)
        {
            var lecturer = new Lecturer
            {
                Name = request.Name,
                Photo = request.Photo,
                Nidn = request.Nidn,
                Position = request.Position,
                EducationLevel = request.EducationLevel,
                Expertise = request.Expertise,
                Email = request.Email,
                CreatedAt = DateTime.UtcNow
            };

            _context.Lecturers.Add(lecturer);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Lecturer added successfully."
            };
        }
    }
}
