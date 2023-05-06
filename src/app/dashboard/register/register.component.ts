import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/services/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    regForm: FormGroup | any;
    submitted = false;
    toggle1: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private registrationService: RegistrationService
    ) { }

    ngOnInit() {
        this.regForm = this.formBuilder.group({
            name: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['male'],
            category: [null, Validators.required],
        });

    }
    get f() { return this.regForm.controls; }


    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach((control: any) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

    onRegClick(event: any, regForm: any) {
        this.markFormGroupTouched(this.regForm);
        this.submitted = true;
        if (this.regForm.invalid) {
            return;
        } else {
            let regUser = new Registration();
            regUser.category = this.f.category.value ? this.f.category.value : undefined;
            regUser.email = this.f.email.value ? this.f.email.value : undefined;
            regUser.gender = this.f.gender.value ? this.f.gender.value : undefined;
            regUser.name = this.f.name.value ? this.f.name.value : undefined;
            regUser.password = this.f.password.value ? this.f.password.value : undefined;

            this.registrationService.saveUser(regUser).subscribe((res) => {
                if (res) {
                    this.router.navigate(['/app-reg-success']);
                }
            })
        }

    }
    
    changeType(input_field_password: { type: string; }, num: number) {
        if (input_field_password.type == "password")
            input_field_password.type = "text";
        else
            input_field_password.type = "password";

        if (num == 1)
            this.toggle1 = !this.toggle1;
    }

}
