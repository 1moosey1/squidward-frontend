import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiGlobals } from '../../utility/ApiGlobals';

@Injectable()
export class AuthService {

  constructor(private api: ApiGlobals, private http: HttpClient) { }

  login(email: String, password: String): Observable<any> {
    return this.http.post(this.api.apiRoot + this.api.loginURI, {
      email: email,
      password: password
    }, {
      observe: 'response',
      withCredentials: true
    });
  }

  register(email: String, password: String): Observable<any> {
    return this.http.post(this.api.apiRoot + this.api.registerURI, {
      email: email,
      password: password
    }, {
      observe: 'response',
      withCredentials: true
    });
  }
}
