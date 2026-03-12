using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Media;

namespace RevampWebSTTB.Commons.Validators.Media
{
    public class CreateMediaCommandValidator : AbstractValidator<CreateMediaCommand>
    {
        public CreateMediaCommandValidator()
        {
            RuleFor(x => x.FilePath)
                .NotEmpty().WithMessage("FilePath is required.")
                .MaximumLength(255).WithMessage("FilePath must not exceed 255 characters.");
        }
    }
}
