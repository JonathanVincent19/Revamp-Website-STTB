using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class UpdateLecturerCommandHandler : IRequestHandler<UpdateLecturerCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateLecturerCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateLecturerCommand request, CancellationToken cancellationToken)
        {
            var lecturer = await _context.Lecturers.FirstOrDefaultAsync(l => l.Id == request.Id, cancellationToken);

            if (lecturer == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Lecturer not found."
                };
            }

            lecturer.Name = request.Name;
            lecturer.Photo = request.Photo;
            lecturer.Nidn = request.Nidn;
            lecturer.Position = request.Position;
            lecturer.EducationLevel = request.EducationLevel;
            lecturer.Expertise = request.Expertise;
            lecturer.Email = request.Email;
            lecturer.SortOrder = request.SortOrder;

            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Lecturer updated successfully."
            };
        }
    }
}
