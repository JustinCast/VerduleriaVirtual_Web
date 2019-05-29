import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class loginService {
  constructor(private http: HttpClient) { }

  /**
   * Function to verify the user into system
   * @param config (username, password)
   */
  login(username: string, password: string): Observable<any> {
    return this.http.get(`http://localhost:3000/login/${username}/${password}`);
  }


}
