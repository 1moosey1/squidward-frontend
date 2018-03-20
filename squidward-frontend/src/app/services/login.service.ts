import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    let param = new HttpParams()
    .set('client_id', 'Iv1.d10898f268a22d3b')

    return this.http.get("https://github.com/login/oauth/authorize", { params: param })
  }
}