using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Events;

namespace RevampWebSTTB.Commons.Validators.Events
{
    public class UpdateEventCommandValidator : AbstractValidator<UpdateEventCommand>
    {
        public UpdateEventCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Invalid Event Id.");

            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(255).WithMessage("Title must not exceed 255 characters.");

            RuleFor(x => x.EventDate)
                .NotEmpty().WithMessage("EventDate is required.");
        }
    }
}
