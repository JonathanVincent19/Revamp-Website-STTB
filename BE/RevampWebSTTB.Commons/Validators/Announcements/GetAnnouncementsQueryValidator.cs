using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Announcements;

namespace RevampWebSTTB.Commons.Validators.Announcements
{
    public class GetAnnouncementsQueryValidator : AbstractValidator<GetAnnouncementsQuery>
    {
        public GetAnnouncementsQueryValidator()
        {
            RuleFor(x => x.Limit)
                .GreaterThan(0).When(x => x.Limit.HasValue)
                .WithMessage("Limit must be greater than 0.");
        }
    }
}
