import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  authSubject = new Subject();
  constructor(private http: HttpClient) { 

  }

  /**
   * Function to verify the user into system
   * @param config (username, password)
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.SERVER_BASE_URL}login`,{username, password});
  }

  auth() {
    this.authSubject.next(true);
  }

}
