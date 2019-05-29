import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../../../environment/env.js';

@Injectable()
export class loginService {
  constructor(private http: HttpClient) { }

  /**
   * Function to verify the user into system
   * @param config (username, password)
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${env.BASE_URL}login`,{username, password});
  }


}
