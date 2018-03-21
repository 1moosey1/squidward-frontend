import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(private authService: AuthService) {}
  ngOnInit() {}

  onLogin(): void {
    this.authService.login(this.email, this.password).toPromise()
      .then(res => {
        console.log(res);
        console.log(res.headers);
      })
      .catch(res => {
        console.log(res);
      });
  }

  onRegister(): void {
    this.authService.register(this.email, this.password).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  }
}
