import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


      export function ConfirmPasswordValidator(controlName: string, checkControlName: string): ValidatorFn {
        return (formGroup: AbstractControl): ValidationErrors | null => {
          
          const passwordControl = formGroup.get(controlName)?.value;
          const confirmPasswordControl = formGroup.get(checkControlName)?.value;

          if (confirmPasswordControl?.errors && !confirmPasswordControl.errors['matching']) {

            return null;
          }

          if (passwordControl !== confirmPasswordControl) {
            // passwordControl.get(confirmPasswordControl)?.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true };
          } else {

            return null;
          }

    };
  }

