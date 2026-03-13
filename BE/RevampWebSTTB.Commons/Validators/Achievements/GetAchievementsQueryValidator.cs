using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Achievements;

namespace RevampWebSTTB.Commons.Validators.Achievements
{
    public class GetAchievementsQueryValidator : AbstractValidator<GetAchievementsQuery>
    {
        public GetAchievementsQueryValidator()
        {
            RuleFor(x => x.Level)
                .Must(level => string.IsNullOrEmpty(level) || new[] { "regional", "nasional", "internasional" }.Contains(level.ToLower()))
                .WithMessage("Invalid level filter.");
        }
    }
}
