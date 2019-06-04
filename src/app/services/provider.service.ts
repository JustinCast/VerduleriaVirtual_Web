import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  public closeDialogs() {
    this.dialog.closeAll();
  }

  getStocks(productId) {
    this.http.get(`${environment.SERVER_BASE_URL}getStockOfProvider/${productId}`).subscribe(
      data => {
        this.stockList = data; console.log(data)
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
      description: stock.description,
      price: stock.price,
      count: stock.count,
      id_product: stock.idProduct,
      id_provider: stock.idProvider
    }).subscribe(
      () => {
        this.closeDialogs(),
          this.openSnackBar("Creado exitosamente");
      }
    )
  }

  modifyStock(stock) {
    this.http.post(`${environment.SERVER_BASE_URL}modifyStock`, {
      description: stock.description,
      price: stock.price,
      count: stock.count,
      id_commodity: stock.idCommodity
    }).subscribe(
      () => {
        this.closeDialogs(),
          this.openSnackBar("Modificado exitosamente")
      }
    )
  }

  aboutStock(stock) {
    this.action ? (
      this.addStock(stock)
    ) : (
        this.modifyStock(stock)
      )
    console.log(stock)
  }

  deleteStock(commodity_id,provider_id) {
    this.http.get(`${environment.SERVER_BASE_URL}deleteCommodity/${commodity_id}/${provider_id}`).subscribe(
      data => {
        console.log("data"+JSON.stringify(data)),
        data[0].delete_commodity ? this.openSnackBar("Eliminado exitosamente") :  this.openSnackBar("No se puede eliminar el inventario");
      }
    )

  }

  lockedStock(commodity_id) {
    let lock = true;
    this.http.get(`${environment.SERVER_BASE_URL}lockedStock/${commodity_id}/${lock}`).subscribe(
      data => {
        console.log(data);
        this.openSnackBar("Bloqueado exitosamente");
      }
    )
  }

  unlockedStock(commodity_id) {
    let lock = false;
    this.http.get(`${environment.SERVER_BASE_URL}lockedStock/${commodity_id}/${lock}`).subscribe(
      data => {
        console.log(data);
        this.openSnackBar("Desbloqueado exitosamente");
      }
    )
  }

  openSnackBar(message) {
    this._snackBar.open(message, "cerrar", {
      duration: 3000
    });
  }

}
