import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../services/login.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public http: HttpClient, private loginService: LoginService) {
    console.log("login service connected");
  }

  ngOnInit() {}

  onClick() {
    this.loginService.login().subscribe(res => {
      console.log(res);
    });
  }
}
