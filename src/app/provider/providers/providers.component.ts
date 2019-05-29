import { Component, OnInit } from '@angular/core';
import LocationPicker from "location-picker";
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
      this.fillMap();
    }, err =>{ console.log(err); this.loading = false;});
  }

  // Fill location maps providers
  fillMap(){
    this.listProviders.forEach( provider => {
      let lp = new LocationPicker(`${provider.id}`, {
        setCurrentPosition: false, // You can omit this, defaults to true
      }, {
        zoom: 15,
        draggable: false
      });
      lp.setLocation(provider.lat, provider.lon);
    });
  }
}
