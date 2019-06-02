import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { Provider } from 'src/app/models/Provider';
import { DialogService } from 'src/app/services/dialog.service';
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  listProviders = new Array<Provider>();
  loading = false;
  actualUser: Provider = null;
  constructor(private _ps: ProviderService,private _dialog: DialogService) {
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
    this.actualUser.id === 'admin' ? this._dialog.openCreateProviders(null) : this._dialog.openCreateProviders(this.listProviders[0]);
  }
}
