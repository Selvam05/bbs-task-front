import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/services/models/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup | any;
    submitted = false;
    toggle1: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            password: ['', Validators.required],
            email: ['', Validators.required],
        });
    };

    get f() { return this.loginForm.controls; };

    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach((control: any) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    };

    onLoginClick(event: any, loginForm: any) {
        this.markFormGroupTouched(this.loginForm);
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        } else {
            let loginData = new Login();
            loginData.email = this.f.email.value;
            loginData.password = this.f.password.value;
            this.loginService.login(loginData).subscribe((res) => {
                if (!res) {
                    alert("Invalid User...!");
                } else {
                    this.router.navigate(['/app-reg-list'])
                }
            })
        }
    };

    changeType(input_field_password: { type: string; }, num: number) {
        if (input_field_password.type == "password")
            input_field_password.type = "text";
        else
            input_field_password.type = "password";

        if (num == 1)
            this.toggle1 = !this.toggle1;
    }
};
