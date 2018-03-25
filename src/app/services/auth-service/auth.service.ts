import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiGlobals } from '../../utility/ApiGlobals';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private api: ApiGlobals,
              private http: HttpClient,
              private router: Router,
              public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(ApiGlobals.tokenName);
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  login(email: String, password: String): Observable<any> {

    return new Observable<any>(observable => {

      this.http.post(ApiGlobals.apiRoot + ApiGlobals.loginURI, {
        email: email,
        password: password
      }, {observe: 'response'})
        .subscribe(
          (res: HttpResponse<string>) => {
            localStorage.setItem(ApiGlobals.tokenName, res.headers.get(ApiGlobals.tokenName));
            observable.next();
          }, () => { observable.error(); });
    });
  }

  register(email: String, password: String): Observable<any> {

    return new Observable<any>(observable => {

      this.http.post(ApiGlobals.apiRoot + ApiGlobals.registerURI, {
        email: email,
        password: password
      }).subscribe(
          () => { observable.next(); },
          () => { observable.error(); });
    });
  }

  logout() {
    localStorage.removeItem(ApiGlobals.tokenName);
    localStorage.clear();
    this.router.navigateByUrl(ApiGlobals.loginRoute);
  }
}
