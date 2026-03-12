using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Albums;

namespace RevampWebSTTB.Commons.Validators.Albums
{
    public class GetAlbumDetailQueryValidator : AbstractValidator<GetAlbumDetailQuery>
    {
        public GetAlbumDetailQueryValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Album ID must be greater than 0.");
        }
    }
}
