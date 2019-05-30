import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { PurchaseReport } from "../models/PurchaseReport";

@Injectable({
  providedIn: "root"
})
export class ProviderService {
  action:true;
  
  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) {}
  

  getPurchasesReport(id_provider: number, initial_date: string, final_date: string): Observable<Array<PurchaseReport>> {
    return this._http.get<Array<PurchaseReport>>(
      `${environment.SERVER_BASE_URL}getPurchasesByProvider/${id_provider}/${initial_date}/${final_date}`
    );
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
