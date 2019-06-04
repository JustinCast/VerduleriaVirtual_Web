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
  stock: any;
  title: any;
  buttonLabel: any;
  product: any;
  currentStock: any;

  constructor(
    private formBuilder: FormBuilder,
    private _providerServices: ProviderService
  ) {
    this.stockFG = this.formBuilder.group({
      count: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._providerServices.action ? (this.title = "Crear inventario", this.buttonLabel = "Crear")
      : (this.title = "Modificar inventario", this.buttonLabel = "Modificar");

    this._providerServices.getProducts();

    this._providerServices.stockToModify ? (
      this.stock = this._providerServices.stockToModify,
      this.stockFG.controls["count"].setValue(this.stock.count),
      this.stockFG.controls["price"].setValue(this.stock.price),
      this.stockFG.controls["description"].setValue(this.stock.description),
      !this._providerServices.action ? this.product = this.stock.productname : null
    ) : null

  }

  onSubmit() {

    let currentStock = {
      description: this.stockFG.controls["description"].value,
      price: this.stockFG.controls["price"].value,
      count: this.stockFG.controls["count"].value,
      idProvider: 1,
      idProduct: undefined,
      idCommodity: undefined
    };

    this._providerServices.action ? currentStock.idProduct = this.product.product_id
      : currentStock.idProduct = this._providerServices.stockToModify.product_id;

    this._providerServices.action ? currentStock.idCommodity = undefined
      : currentStock.idCommodity = this._providerServices.stockToModify.commodity_id;

    this._providerServices.aboutStock(currentStock);

  }
}
