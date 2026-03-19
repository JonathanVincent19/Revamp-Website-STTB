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

            RuleFor(x => x.Semesters)
                .GreaterThan(0).WithMessage("Semesters must be greater than 0.");

            RuleFor(x => x.Status)
                .Must(s => string.IsNullOrEmpty(s) || s == "active" || s == "inactive")
                .WithMessage("Status must be 'active' or 'inactive'.");
        }
    }
}
