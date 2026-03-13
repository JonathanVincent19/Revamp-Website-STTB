using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses.HR;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class GetStaffQueryHandler : IRequestHandler<GetStaffQuery, GetStaffResponse>
    {
        private readonly STTBContext _context;

        public GetStaffQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetStaffResponse> Handle(GetStaffQuery request, CancellationToken cancellationToken)
        {
            // Assuming Staff table has Department and NIP fields as per notes
            var staffList = await _context.Staff
                .OrderBy(s => s.SortOrder)
                .ToListAsync(cancellationToken);

            return new GetStaffResponse
            {
                Success = true,
                Data = staffList.Select(s => new StaffDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Photo = s.Photo,
                    Position = s.Position,
                    Email = s.Email,
                }).ToList()
            };
        }
    }
}
