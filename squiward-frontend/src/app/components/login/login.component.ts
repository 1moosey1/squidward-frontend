import { Component, OnInit } from '@angular/core';
import {HttpParams, HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
//we might need mapping might not depending on how you're doing things but this is the import
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient) { 
    console.log("login service connected");
  }

  ngOnInit() {
  }

  //checking for github account in the database?? need more research.

}
