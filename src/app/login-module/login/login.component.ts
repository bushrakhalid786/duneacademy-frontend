import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AppRestEndPoint } from 'src/app/app-restend-points';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    email: string;
    password: string;
    submitted = false;

    constructor(
        private router: Router,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl(this.email, Validators.required),
            'password': new FormControl(this.password, Validators.required)
        });
    }

    // convenience getter for easy access to form fields
    get formFields() { return this.loginForm.controls; }

    submitLogin() {
        this.submitted = true;
        const reqObj = new FormData();
        reqObj.append('email', this.email);
        reqObj.append('password', this.password);

        this.apiService.postCall(AppRestEndPoint.LOGIN, reqObj).subscribe(data => {
            console.log(data);
        });
    }

}
