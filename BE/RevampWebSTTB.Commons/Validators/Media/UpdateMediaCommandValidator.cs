using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Media;

namespace RevampWebSTTB.Commons.Validators.Media
{
    public class UpdateMediaCommandValidator : AbstractValidator<UpdateMediaCommand>
    {
        public UpdateMediaCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Invalid Media Id.");

            RuleFor(x => x.FilePath)
                .NotEmpty().WithMessage("FilePath is required.")
                .MaximumLength(255).WithMessage("FilePath must not exceed 255 characters.");
        }
    }
}
