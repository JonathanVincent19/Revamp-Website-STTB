using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Tuitions;

namespace RevampWebSTTB.Commons.Validators.Tuitions
{
    public class UpdateTuitionFeeCommandValidator : AbstractValidator<UpdateTuitionFeeCommand>
    {
        public UpdateTuitionFeeCommandValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0).WithMessage("Invalid TuitionFee Id.");

            RuleFor(x => x.Program)
                .NotEmpty().WithMessage("Program is required.")
                .MaximumLength(100).WithMessage("Program must not exceed 100 characters.");

            RuleFor(x => x.ItemName)
                .NotEmpty().WithMessage("ItemName is required.")
                .MaximumLength(255).WithMessage("ItemName must not exceed 255 characters.");

            RuleFor(x => x.Amount)
                .GreaterThanOrEqualTo(0).WithMessage("Amount must be 0 or greater.");
        }
    }
}
