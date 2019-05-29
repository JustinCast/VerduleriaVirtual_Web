import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../../../environment/env.js';
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
    return this.http.get(`${env.BASE_URL}getProviders`);
  }
}
