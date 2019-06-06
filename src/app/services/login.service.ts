import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  constructor(private http: HttpClient) { }

  /**
   * Function to verify the user into system
   * @param config (username, password)
   */
  //
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.SERVER_BASE_URL}login`,{username, password});
  }
}
