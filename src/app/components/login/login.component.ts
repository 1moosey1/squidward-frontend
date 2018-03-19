import { Component, OnInit } from '@angular/core';
import {HttpParams, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient) {
    console.log('login service connected');
  }

  ngOnInit() {
  }
}
