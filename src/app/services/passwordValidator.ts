import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { 'passwordMismatch': true };
    }
    if (!password || !confirmPassword) {
        return null;
    }
    return null;
};

