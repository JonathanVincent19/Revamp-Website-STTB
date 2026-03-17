using FluentValidation;
using RevampWebSTTB.Contracts.Requests.News;

namespace RevampWebSTTB.Commons.Validators.News
{
    public class UpdateNewsCommandValidator : AbstractValidator<UpdateNewsCommand>
    {
        public UpdateNewsCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Invalid News Id.");

            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(255).WithMessage("Title must not exceed 255 characters.");

            RuleFor(x => x.Slug)
                .MaximumLength(255).WithMessage("Slug must not exceed 255 characters.")
                .Matches(@"^[a-z0-9]+(?:-[a-z0-9]+)*$")
                    .WithMessage("Slug must be lowercase alphanumeric with hyphens (e.g. 'my-news-title').")
                .When(x => !string.IsNullOrEmpty(x.Slug));

            RuleFor(x => x.Content)
                .NotEmpty().WithMessage("Content is required.");

            RuleFor(x => x.Status)
                .Must(s => s == "draft" || s == "published")
                    .WithMessage("Status must be 'draft' or 'published'.")
                .When(x => !string.IsNullOrEmpty(x.Status));

            RuleFor(x => x.FeaturedImage)
                .Must(BeAValidUrl).WithMessage("FeaturedImage must be a valid URL or a relative path (e.g. /uploads/image.jpg).")
                .When(x => !string.IsNullOrEmpty(x.FeaturedImage));
        }

        private static bool BeAValidUrl(string? url)
        {
            if (string.IsNullOrWhiteSpace(url)) return true;
            if (url.StartsWith("/")) return true;
            return Uri.TryCreate(url, UriKind.Absolute, out _);
        }
    }
}
