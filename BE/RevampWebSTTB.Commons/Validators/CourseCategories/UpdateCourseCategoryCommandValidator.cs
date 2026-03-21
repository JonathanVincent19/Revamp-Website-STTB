using FluentValidation;
using RevampWebSTTB.Contracts.Requests.CourseCategories;

namespace RevampWebSTTB.Commons.Validators.CourseCategories
{
    public class UpdateCourseCategoryCommandValidator : AbstractValidator<UpdateCourseCategoryCommand>
    {
        public UpdateCourseCategoryCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Invalid CourseCategory Id.");

            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Name is required.")
                .MaximumLength(100).WithMessage("Name must not exceed 100 characters.");

            RuleFor(x => x.TotalSKS)
                .GreaterThanOrEqualTo(0).WithMessage("TotalSKS must be 0 or greater.");
        }
    }
}
