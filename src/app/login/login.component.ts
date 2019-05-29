import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { loginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    public loginService: loginService

  ) {
    this.loginGroup = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginGroup.invalid) {
        return;
    }

    this.loginService.login(
      this.loginGroup.get('username').value,
      this.loginGroup.get('password').value).subscribe(user => {
      console.log(user);
    });

    //TODO: Navegación a home
  }
}
