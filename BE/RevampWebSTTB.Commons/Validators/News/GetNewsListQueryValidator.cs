using FluentValidation;
using RevampWebSTTB.Contracts.Requests.News;

namespace RevampWebSTTB.Commons.Validators.News
{
    public class GetNewsListQueryValidator : AbstractValidator<GetNewsListQuery>
    {
        public GetNewsListQueryValidator()
        {
            RuleFor(x => x.Page)
                .GreaterThan(0).When(x => x.Page.HasValue)
                .WithMessage("Page must be greater than 0.");

            RuleFor(x => x.Limit)
                .GreaterThan(0).When(x => x.Limit.HasValue)
                .WithMessage("Limit must be greater than 0.");

            RuleFor(x => x.CategoryId)
                .GreaterThan(0).When(x => x.CategoryId.HasValue)
                .WithMessage("Category ID must be greater than 0.");
        }
    }
}
