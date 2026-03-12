using FluentValidation;
using RevampWebSTTB.Contracts.Requests.Contacts;

namespace RevampWebSTTB.Commons.Validators.Contacts
{
    public class CreateContactMessageCommandValidator : AbstractValidator<CreateContactMessageCommand>
    {
        public CreateContactMessageCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Name is required.")
                .MaximumLength(150).WithMessage("Name must not exceed 150 characters.");

            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email is required.")
                .MaximumLength(150).WithMessage("Email must not exceed 150 characters.")
                .EmailAddress().WithMessage("A valid email address is required.");

            RuleFor(x => x.PhoneNumber)
                .MaximumLength(50).WithMessage("Phone number must not exceed 50 characters.");

            RuleFor(x => x.Subject)
                .MaximumLength(100).WithMessage("Subject must not exceed 100 characters.");

            RuleFor(x => x.Message)
                .NotEmpty().WithMessage("Message content is required.");
        }
    }
}
