using FluentValidation;
using RevampWebSTTB.Contracts.Requests.News;

namespace RevampWebSTTB.Commons.Validators.News
{
    public class GetNewsDetailQueryValidator : AbstractValidator<GetNewsDetailQuery>
    {
        public GetNewsDetailQueryValidator()
        {
            RuleFor(x => x.Slug)
                .NotEmpty().WithMessage("Slug is required.")
                .MaximumLength(255).WithMessage("Slug cannot exceed 255 characters.");
        }
    }
}
