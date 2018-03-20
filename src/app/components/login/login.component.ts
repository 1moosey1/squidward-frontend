import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) {}
  ngOnInit() {}

  onClick() {
    this.loginService.login().subscribe(res => {
      console.log(res);
    });
  }
}
