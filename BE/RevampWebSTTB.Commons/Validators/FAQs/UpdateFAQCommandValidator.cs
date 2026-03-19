using FluentValidation;
using RevampWebSTTB.Contracts.Requests.FAQs;

namespace RevampWebSTTB.Commons.Validators.FAQs
{
    public class UpdateFAQCommandValidator : AbstractValidator<UpdateFAQCommand>
    {
        public UpdateFAQCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Invalid FAQ Id.");

            RuleFor(x => x.Question)
                .NotEmpty().WithMessage("Question is required.");

            RuleFor(x => x.Answer)
                .NotEmpty().WithMessage("Answer is required.");

            RuleFor(x => x.SortOrder)
                .GreaterThanOrEqualTo(0).WithMessage("SortOrder must be 0 or greater.");
        }
    }
}
