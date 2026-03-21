using FluentValidation;
using RevampWebSTTB.Contracts.Requests.CourseCategories;

namespace RevampWebSTTB.Commons.Validators.CourseCategories
{
    public class CreateCourseCategoryCommandValidator : AbstractValidator<CreateCourseCategoryCommand>
    {
        public CreateCourseCategoryCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Name is required.")
                .MaximumLength(100).WithMessage("Name must not exceed 100 characters.");

            RuleFor(x => x.TotalSKS)
                .GreaterThanOrEqualTo(0).WithMessage("TotalSKS must be 0 or greater.");
        }
    }
}
