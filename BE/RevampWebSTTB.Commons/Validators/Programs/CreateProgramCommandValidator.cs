using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Programs;

namespace RevampWebSTTB.Commons.Validators.Programs
{
    public class CreateProgramCommandValidator : AbstractValidator<CreateProgramCommand>
    {
        public CreateProgramCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Name is required.")
                .MaximumLength(100).WithMessage("Name must not exceed 100 characters.");

            RuleFor(x => x.Level)
                .NotEmpty().WithMessage("Level is required.")
                .MaximumLength(50).WithMessage("Level must not exceed 50 characters.");

            RuleFor(x => x.Degree)
                .NotEmpty().WithMessage("Degree is required.")
                .MaximumLength(50).WithMessage("Degree must not exceed 50 characters.");

            RuleFor(x => x.TotalCredits)
                .GreaterThanOrEqualTo(0).WithMessage("TotalCredits must be 0 or greater.");

            RuleFor(x => x.StudyDuration)
                .NotEmpty().WithMessage("StudyDuration is required.")
                .MaximumLength(100).WithMessage("StudyDuration must not exceed 100 characters.");

            RuleFor(x => x.LearningSystem)
                .NotEmpty().WithMessage("LearningSystem is required.")
                .MaximumLength(100).WithMessage("LearningSystem must not exceed 100 characters.");
        }
    }
}

