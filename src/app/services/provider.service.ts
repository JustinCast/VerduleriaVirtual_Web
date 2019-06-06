import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { PurchaseReport } from "../models/PurchaseReport";
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: "root"
})
export class ProviderService {
  action: boolean;
  stockList: any;
  productsList: any; //It's a list of the all products avalibles 
  stockToModify: any;
  
  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) {}


  /**
   * Function to get Providers
   * @param {id}
   * return list providers{id,username,name,lat,lon}
   */
  getProviders(id): Observable<any> {
    return this._http.get(`${environment.SERVER_BASE_URL}getProviders/${id}`);
  }

  getPurchasesReport(id_provider: number, initial_date: string, final_date: string): Observable<Array<PurchaseReport>> {
    return this._http.get<Array<PurchaseReport>>(
      `${environment.SERVER_BASE_URL}getPurchasesByProvider/${id_provider}/${initial_date}/${final_date}`
    );
  }
/**
   * Function to delete provider
   * @param id
   * confirmation
   */
  deleteProvider(id): Observable<any> {
    return this._http.delete(`${environment.SERVER_BASE_URL}deleteProvider/${id}`);
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // Error del lado del cliente
      console.log("An error occurred:", err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // Error del lado del backend
      console.log(
        `Backend returned code ${err.status}, body was: ${JSON.stringify(
          err.error
        )}`
      );
    }
  }

  getStocks(providerId) {
    this._http.get(`${environment.SERVER_BASE_URL}getStockOfProvider/${providerId}`).subscribe(
      data => {
        this.stockList = data; console.log(data)
        console.log(data);
      }
    )
  }

  getProducts() {
    this._http.get(`${environment.SERVER_BASE_URL}getAllProducts`).subscribe(
      data => {
        this.productsList = data;
        console.log(data);
      }
    )
  }

  addStock(stock) {
    this._http.post(`${environment.SERVER_BASE_URL}addStock`, {
      description: stock.description,
      price: stock.price,
      count: stock.count,
      id_product: stock.idProduct,
      id_provider: stock.idProvider
    }).subscribe(
      () => {
        this.openSnackBar("Creado exitosamente");
        this.getStocks(1);
      }
    )
  }

  modifyStock(stock) {
    this._http.post(`${environment.SERVER_BASE_URL}modifyStock`, {
      description: stock.description,
      price: stock.price,
      count: stock.count,
      id_commodity: stock.idCommodity
    }).subscribe(
      () => {
        this.openSnackBar("Modificado exitosamente");
        this.getStocks(1);
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
    this._http.get(`${environment.SERVER_BASE_URL}deleteCommodity/${commodity_id}/${provider_id}`).subscribe(
      data => {
        console.log("data"+JSON.stringify(data)),
        data[0].delete_commodity ? this.openSnackBar("Eliminado exitosamente") :  this.openSnackBar("No se puede eliminar el inventario"),
        this.getStocks(1);
      }
    )

  }

  lockedStock(commodity_id) {
    let lock = true;
    this._http.get(`${environment.SERVER_BASE_URL}lockedStock/${commodity_id}/${lock}`).subscribe(
      data => {
        console.log(data);
        this.openSnackBar("Bloqueado exitosamente"),
        this.getStocks(1);
      }
    )
  }

  unlockedStock(commodity_id) {
    let lock = false;
    this._http.get(`${environment.SERVER_BASE_URL}lockedStock/${commodity_id}/${lock}`).subscribe(
      data => {
        console.log(data);
        this.openSnackBar("Desbloqueado exitosamente"),
        this.getStocks(1);
      }
    )
  }

  openSnackBar(message) {
    this._snackBar.open(message, "cerrar", {
      duration: 3000
    });
  }
  
  /**
   * Function to checkPassword provider
   * @param {id,password}
   * return id
   */
  checkPassword(id: number , password: string): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}checkPassword`, { id, password});
  }
  /**
     * Function to create or update provider
     * @param provider
     * confirmation
     */
  updateOrCreateProvider(provider): Observable<any>{
    return this._http.post(`${environment.SERVER_BASE_URL}updateOrCreateProvider`, {provider});
  }
  /**
   * Function to block provider
   * @param id, block
   * confirmation
   */
  blockProvider(block,id): Observable<any> {
    return this._http.post(`${environment.SERVER_BASE_URL}blockProvider`, {block, id});
  }
}
