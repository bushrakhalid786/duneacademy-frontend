import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppRestEndPoint } from '../../app-restend-points';
import { ApiService } from '../../services/api.service';
import * as moment from 'moment';
import { passwordValidator } from 'src/app/services/passwordValidator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
    country: string;
    submitted = false;
    dob: any;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        // Form validator initialisation
        this.registerForm = new FormGroup({
            'name': new FormControl(this.name, Validators.required),
            'email': new FormControl(this.email, [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl(this.password, [
                Validators.required,
                Validators.minLength(6)
            ]),
            'confirmPassword': new FormControl(this.confirmPassword, [
                Validators.required,
                Validators.minLength(6)
            ]),
            'dob': new FormControl(''),
            'city': new FormControl(''),
            'country': new FormControl('')
        }, { validators: passwordValidator });
    }

    // submit register
    submitRegister() {
        this.submitted = true;
        if (this.registerForm.valid) {
            const reqObj = {
                'name': this.name,
                'email': this.email,
                'password': this.password,
                'password_confirmation': this.confirmPassword,
                'dob': this.dob ? moment(this.dob).format('YYYY-MM-DD') : '',
                'city': this.city ? this.city : '',
                'country': this.country ? this.country : ''
            };
            this.apiService.postCall(AppRestEndPoint.REGISTER, reqObj).subscribe(data => {
                if (data.user) {
                    console.log(data);
                } else if (data.errors) {
                    console.log(data.errors.email[0]);
                } else if (data.message) {
                    console.log(data.message);
                }
            });
        }
    }
}
