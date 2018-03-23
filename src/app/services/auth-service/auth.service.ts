import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
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

  login(email: String, password: String): boolean {

    let loginSuccessful = false;
    this.http.post(ApiGlobals.apiRoot + ApiGlobals.loginURI, {
      email: email,
      password: password
    }, {observe: 'response'})
      .subscribe(
        res => {

          localStorage.setItem(ApiGlobals.tokenName, res.headers.get(ApiGlobals.tokenName));
          loginSuccessful = true;
        });

    return loginSuccessful;
  }

  register(email: String, password: String): boolean {

    let registerSuccessful = false;
    this.http.post(ApiGlobals.apiRoot + ApiGlobals.registerURI, {
      email: email,
      password: password
    }, {observe: 'response'})
      .subscribe(() => { registerSuccessful = true; });

    return registerSuccessful;
  }

  logout() {
    localStorage.removeItem(ApiGlobals.tokenName);
  }
}
