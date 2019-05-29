import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { loginService } from '../services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  loading = false;
  constructor(
    private _fb: FormBuilder,
    public loginService: loginService,
    private _snackBar: MatSnackBar

  ) {
    this.loginGroup = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  /**
   * Function to show snackbar
   * @param msj, action
   */
  snackbar(msj: string , action: string, ){
    this._snackBar.open(msj, action, {
      duration: 3000,
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginGroup.invalid) {
        return;
    }
    // call service
    this.loading = true;
    this.loginService.login(
      this.loginGroup.get('username').value,
      this.loginGroup.get('password').value).subscribe(user => {
      if(user.length !== 0){
        localStorage.setItem('actual_user', JSON.stringify({id: user[0].id, nombre: user[0].name}));
        this.snackbar(`Bienvenido ${user[0].name.charAt(0).toUpperCase() + user[0].name.slice(1)}`, 'Aceptado');
        this.loading = false;
        // TODO: navegar al main
      } else {
        this.snackbar(`Información incorrecta`, 'ERROR');
        this.loading = false;
      }
    }, err => {
      this.snackbar(JSON.stringify(err), 'ERROR');
      this.loading = false;
    });

  }
}
