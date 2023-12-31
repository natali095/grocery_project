import { AbstractControl } from "@angular/forms"

export const PasswordsMachValidator = (passwordControlName: string,
    confirmPasswordControlName: string) => {
        const validator = (form: AbstractControl) => {
            const passwordControl = form.get(passwordControlName);
            const confirmPasswordControl = form.get(passwordControlName);

            if(!passwordControl || !confirmPasswordControl) return;

            if(passwordControl.value !== confirmPasswordControl.value){
                confirmPasswordControl.setErrors({notMach:true});
            }else{
                const errors = confirmPasswordControl.errors;
                if(!errors) return;

                delete errors.notMach;
                confirmPasswordControl.setErrors(errors);
            }

        }
        return validator;
    }
    