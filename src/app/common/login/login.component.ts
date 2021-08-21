import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  showButtonFlag: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthorizationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(form: FormGroup) {
    console.log(form)
    if (form.valid) {
      this.auth.login(form.value);
    }
  }

  resolved(captchaResponse: string) {
    console.log(captchaResponse)
    this.showButton();
  }

  showButton() {
    this.showButtonFlag = true;
  }

  initForm() {
    this.loginFormGroup = this.formBuilder.group({
      'email': ["", Validators.compose([Validators.email, Validators.required])],
      'password': ["", Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

}
