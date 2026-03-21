using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Courses;

namespace RevampWebSTTB.Commons.Validators.Courses
{
    public class CreateCourseCommandValidator : AbstractValidator<CreateCourseCommand>
    {
        public CreateCourseCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Name is required.")
                .MaximumLength(200).WithMessage("Name must not exceed 200 characters.");

            RuleFor(x => x.Credits)
                .GreaterThanOrEqualTo(0).WithMessage("Credits must be 0 or greater.");

            RuleFor(x => x.CategoryId)
                .GreaterThan(0).WithMessage("A valid CategoryId is required.");
        }
    }
}
