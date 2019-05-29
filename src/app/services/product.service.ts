import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) { }

  saveProduct(product: Product): void {
    this._http.post(`${environment.SERVER_BASE_URL}createProduct`, product)
    .subscribe(
      () => this.openSnackBar('Producto guardado', 'Ok', 3000),
      (err: HttpErrorResponse) => this.handleError(err)
    )
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
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
}
