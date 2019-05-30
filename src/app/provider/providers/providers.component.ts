import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  listProviders =[];
  loading = false;
  constructor(private _ps: ProviderService) {

  }

  ngOnInit() {
    this.loading = true;
    this._ps.getProviders().subscribe(list => {
      this.listProviders = list.slice();
      this.loading = false;
    }, err =>{ console.log(err); this.loading = false;});
  }
}
