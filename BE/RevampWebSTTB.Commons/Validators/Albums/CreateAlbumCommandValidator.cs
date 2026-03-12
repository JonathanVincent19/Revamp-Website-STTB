using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Albums;

namespace RevampWebSTTB.Commons.Validators.Albums
{
    public class CreateAlbumCommandValidator : AbstractValidator<CreateAlbumCommand>
    {
        public CreateAlbumCommandValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(150).WithMessage("Title must not exceed 150 characters.");
        }
    }
}
