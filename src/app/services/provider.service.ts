import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/env';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  action: boolean;
  stockList: any;
  productsList: any; //It's a list of the all products avalibles 
  stockToModify: any;

  constructor(
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  getStocks(productId) {
    this.http.get(`${environment.SERVER_BASE_URL}getStockOfProvider/${productId}`).subscribe(
      data => {
        this.stockList = data;
        console.log(data);
      }
    )

  }

  getProducts() {
    this.http.get(`${environment.SERVER_BASE_URL}getAllProducts`).subscribe(
      data => {
        this.productsList = data;
        console.log(data);
      }
    )
  }

  addStock(stock) {
    this.http.post(`${environment.SERVER_BASE_URL}addStock`, {
      description:stock.description ,
      price: stock.price,
      count: stock.count,
      id_product: stock.id_product,
      id_provider: stock.id_provider
    }).subscribe(
      data => {
        this.productsList = data;
        console.log(data);
      }
    )
  }

  modifyStock(stock) {
    this.http.post(`${environment.SERVER_BASE_URL}modifyStock`, {
      description:stock.description ,
      price: stock.price,
      count: stock.count,
      id_commodity: stock.id_commodity
    }).subscribe(
      data => {
        this.productsList = data;
        console.log(data);
      }
    )
  }

  aboutStock(stock) {
    this.action ? (
      console.log("crear inventario "),
      this.addStock(stock),
      this.openSnackBar("Creado exitosamente")
    ) : (
        this.modifyStock(stock),
        console.log("Modificar inventario" + this.stockToModify.id)
      )
    console.log(stock)
  }

  deleteStock() {
    console.log("borrar inventario");
    this.openSnackBar("Borrado exitosamente");
  }

  lockedStock() {
    console.log("bloquear inventario");
    this.openSnackBar("Bloqueado exitosamente");
  }

  openSnackBar(message) {
    this._snackBar.open(message, "cerrar", {
      duration: 3000
    });
  }

}
