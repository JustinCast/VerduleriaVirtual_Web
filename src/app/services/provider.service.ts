import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }
  /**
   * Function to get Providers
   * @param {}
   * return list providers{id,username,name,lat,lon}
   */
  getProviders(): Observable<any> {
    return this.http.get(`${environment.SERVER_BASE_URL}getProviders`);
  }
}
