import { Injectable } from '@angular/core';
import {HttpParams, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(): Observable<any> {

    return this.http.get('http://localhost:8080/api/login')
  }

}