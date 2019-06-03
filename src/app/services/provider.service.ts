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

  getStocks (productId){
    //this.stockList = [{ id: 1, productName: 'tomate', description: 'Este productos es excelente', price: 2000, quantity: 20 }, { id: 2, productName: 'lechuga', description: 'Este productos es excelente', price: 2000, quantity: 20 }, { id: 3, productName: 'lechuga', description: 'Este productos es excelente', price: 2000, quantity: 20 }, { id: 4, productName: 'lechuga', description: 'Este productos es excelente', price: 2000, quantity: 20 }]
  
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
    this.action ? (
      console.log("crear inventario "),
      this.openSnackBar("Creado exitosamente")
    ) : (
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
