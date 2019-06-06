import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { Provider } from 'src/app/models/Provider';
import { DialogService } from 'src/app/services/dialog.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  listProviders = new Array<Provider>();
  loading = false;
  actualUser: Provider = null;
  constructor(private _ps: ProviderService,private _dialog: DialogService,private _snackBar: MatSnackBar) {
    // Get actual user
    this.actualUser = JSON.parse(localStorage.getItem('actual_user'));
  }

  ngOnInit() {
    this.loading = true;
    this._ps.getProviders(this.actualUser.id).subscribe(list => {
      this.listProviders = list.slice();
      this.loading = false;
    }, err =>{ console.log(err); this.loading = false;});
  }

  // Open dialog for create or update provider
  openDialog(){
    this.actualUser.id === 'admin' ?
    this._dialog.openCreateProviders(null).subscribe(newProvider => {
      if(newProvider !== undefined)
        this.listProviders.push(newProvider);
    })
     : this._dialog.openCreateProviders(this.listProviders[0]);
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
  // Delete provider
  deleteProvider(id){
    this._ps.deleteProvider(id).subscribe(res => {
      this.listProviders = this.listProviders.filter(provider => provider.id !== id);
      this.snackbar('Eliminado correctamente', 'Aceptado');
    }, err => {this.snackbar('Este proveedor ya a sido asignado a un inventario', 'ERROR')})
  }

  onChangeToggle(block,id){
    this._ps.blockProvider(!block,id).subscribe(res => {
      if(!block){
        this.snackbar('Se ha bloqueado correctamente', 'Aceptado');
      }else this.snackbar('Se ha desbloqueado correctamente', 'Aceptado');
      this.listProviders.forEach(e => e.id === id ? e.block = !block : null);
    }, err => {this.snackbar('Este proveedor ya a sido asignado a un inventario', 'ERROR');})
  }
}
