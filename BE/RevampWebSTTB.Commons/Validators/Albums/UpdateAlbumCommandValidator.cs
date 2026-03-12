using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Albums;

namespace RevampWebSTTB.Commons.Validators.Albums
{
    public class UpdateAlbumCommandValidator : AbstractValidator<UpdateAlbumCommand>
    {
        public UpdateAlbumCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Invalid Album Id.");

            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(150).WithMessage("Title must not exceed 150 characters.");
        }
    }
}
