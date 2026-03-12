using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Events;

namespace RevampWebSTTB.Commons.Validators.Events
{
    public class GetEventsQueryValidator : AbstractValidator<GetEventsQuery>
    {
        public GetEventsQueryValidator()
        {
            RuleFor(x => x.Status)
                .Must(status => string.IsNullOrEmpty(status) || new[] { "upcoming", "past", "ongoing" }.Contains(status.ToLower()))
                .WithMessage("Invalid status filter. Allowed values: upcoming, past, ongoing.");

            RuleFor(x => x.Limit)
                .GreaterThan(0).When(x => x.Limit.HasValue);
        }
    }
}
