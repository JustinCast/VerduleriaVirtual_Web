import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-create-stocktaking',
  templateUrl: './create-stocktaking.component.html',
  styleUrls: ['./create-stocktaking.component.scss']
})
export class CreateStocktakingComponent implements OnInit {
  public stockFG: FormGroup;

  title: any;

  buttonLabel: any;

  products: Array<any> = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'tacos', viewValue: 'Tacos' }
  ];

  constructor(private formBuilder: FormBuilder, private _providerServices: ProviderService) {
    this.stockFG = this.formBuilder.group({
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      product: ['', Validators.required]
    });
  }

  ngOnInit() {
    if(this._providerServices.action=== true){ this.title="Crear inventario";this.buttonLabel="Crear"}else{ this.title="Modificar inventario";this.buttonLabel="Modificar"}
  }

  onSubmit() {
    console.log(this.stockFG.controls["product"].value);
  }


}
