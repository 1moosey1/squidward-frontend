import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import { ApiGlobals } from '../../utility/ApiGlobals';

@Injectable()
export class AuthService {

  constructor(private api: ApiGlobals,
              private http: HttpClient,
              public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(ApiGlobals.tokenName);
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  login(email: String, password: String): Observable<any> {
    return this.http.post(ApiGlobals.apiRoot + ApiGlobals.loginURI, {
      email: email,
      password: password
    }, {observe: 'response'});
  }

  register(email: String, password: String): Observable<any> {
    return this.http.post(ApiGlobals.apiRoot + ApiGlobals.registerURI, {
      email: email,
      password: password
    }, {observe: 'response'});
  }
}
