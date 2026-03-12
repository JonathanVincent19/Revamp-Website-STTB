using FluentValidation;
using RevampWebSTTB.Contracts.Requests.News;

namespace RevampWebSTTB.Commons.Validators.News
{
    public class CreateNewsCommandValidator : AbstractValidator<CreateNewsCommand>
    {
        public CreateNewsCommandValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(255).WithMessage("Title must not exceed 255 characters.");

            RuleFor(x => x.Slug)
                .NotEmpty().WithMessage("Slug is required.")
                .MaximumLength(255).WithMessage("Slug must not exceed 255 characters.");

            RuleFor(x => x.Content)
                .NotEmpty().WithMessage("Content is required.");
        }
    }
}
