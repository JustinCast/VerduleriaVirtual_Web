import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { Provider } from 'src/app/models/Provider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/services/provider.service';
@Component({
  selector: 'app-create-modify-provider',
  templateUrl: './create-modify-provider.component.html',
  styleUrls: ['./create-modify-provider.component.scss']
})
export class CreateModifyProviderComponent implements OnInit {
  providerGroup: FormGroup;
  loading = false;
  actualProvider: Provider;
  title: string;
  showNewPassword = false;
  icon = "warning";
  lat: number = 9.934739;
  lon: number = -84.087502;
  show = true;
  constructor(
    public dialogRef: MatDialogRef<CreateModifyProviderComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _fb: FormBuilder,
    public _providerService: ProviderService,
    private _snackBar: MatSnackBar
  ) {
    this.fillDefaultProvider(); // Default provider
    this.providerGroup = this._fb.group({
      user_name: [this.actualProvider.user_name === undefined ? '' : this.actualProvider.user_name, Validators.required],
      name: [this.actualProvider.name === undefined ? '' : this.actualProvider.name, Validators.required],
      password: ['', Validators.required],
      newPassword: ['', this.actualProvider.id === undefined ? Validators.required : Validators.nullValidator]
    });


  }

  viewPassword() {
    this.show = !this.show;
  }
  // Set provider location
  setActualLocation(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  onChoseLocation(event){
    this.lat = event.coords.lat;
    this.lon = event.coords.lng;
  }

  // Fill default provider for update or create
  fillDefaultProvider() {
    this.data.provider === null ? this.actualProvider = new Provider() : this.actualProvider = this.data.provider;
    this.data.provider === null ? this.title = 'Crear un Proveedor' : this.title = 'Actualizar Datos';
    this.data.provider !== null ? this.setActualLocation(+this.actualProvider.lat, +this.actualProvider.lon) : null;
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
  // Check password
  checkPassword(){
    this._providerService.checkPassword( this.actualProvider.id, this.providerGroup.get('password').value)
    .subscribe( res => {
      if(res.length > 0){
        this.showNewPassword = true;
        this.icon = 'check';
        this.snackbar('Contraseña Correcta', 'Aceptado')
      } else {
        this.snackbar('Contraseña Incorrecta', 'ERROR');
        this.showNewPassword = false;
      }
    }, err => {this.snackbar(err, 'ERROR'); this.showNewPassword = false;});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  dragEnd(event){
    this.lat = event.coords.lat;
    this.lon = event.coords.lng;
  }
  /**
   * Function to validate create provider
   * @param {}
   * return provider{user_name, password,name, lat, lon, create}
   */
  validateCreateProvider() {
    if(this.providerGroup.get('user_name').value === ''
      && this.providerGroup.get('name').value === ''
      && this.providerGroup.get('password').value === ''){
        return null;
      } else {
        return {
          user_name : this.providerGroup.get('user_name').value,
          name: this.providerGroup.get('name').value,
          password: this.providerGroup.get('password').value,
          lat: this.lat,
          lon: this.lon,
          create: true
        }
      }
  }
  /**
   *  Function to validate update provider
   * @param {}
   * return provider{user_name, password,name, lat, lon, create}
   */
  validateUpdateProvider(){
    let provider = {
      id: this.actualProvider.id,
      user_name : this.providerGroup.get('user_name').value,
      name: this.providerGroup.get('name').value,
      password: this.providerGroup.get('password').value === '' ? null : this.providerGroup.get('newPassword').value,
      lat: this.lat,
      lon: this.lon,
      create: false
    }
    return provider;
  }
  onSubmit() {
    let provider;
    if(this.actualProvider.id === undefined){ // Admin
      provider = this.validateCreateProvider();
    } else{ // Provider
      provider = this.validateUpdateProvider();
    }

    if (provider === null){ // Error
      this.snackbar('Faltan datos por rellenar','ERROR');
    } else {
      this._providerService.updateOrCreateProvider(provider).subscribe(res => {
        this.snackbar('Se realizo correctamente', 'Aceptado');
        this.dialogRef.close();
      }, err => this.snackbar(err, 'ERROR'))
    }
  }

}
