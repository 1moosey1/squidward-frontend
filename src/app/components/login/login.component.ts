import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  initiateLogin: LoginService;
  constructor(private loginService: LoginService) {
    this.initiateLogin = loginService;
  }
  ngOnInit() {}
}
