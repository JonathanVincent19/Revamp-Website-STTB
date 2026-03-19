using FluentValidation;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Entities.Models;

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

            RuleFor(x => x.Category)
                .NotEmpty().WithMessage("Category is required.")
                .Must(c => Enum.TryParse<FaqCategory>(c, ignoreCase: true, out _))
                .WithMessage("Invalid category. Valid values: General, Admission, Scholarship, Financial, SupportStudy, StudyProgramConsultation, BachelorConsultation, MasterConsultation.");
        }
    }
}

