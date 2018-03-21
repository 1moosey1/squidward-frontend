import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { ApiGlobals } from '../../utility/ApiGlobals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public displayMessage = false;
  public alertMessage: string;

  constructor(private authService: AuthService,
              private router: Router,
              private apiGlobals: ApiGlobals) {}

  ngOnInit() {}

  onLogin(): void {

    this.authService.login(this.email, this.password).subscribe(
      res => {

        localStorage.setItem(this.apiGlobals.tokenName, res.headers.get(this.apiGlobals.tokenName));
        this.router.navigateByUrl('/projects');
      },
      res => {

        this.displayMessage = true;
        this.alertMessage = 'Invalid Email / Password';
      });
  }

  onRegister(): void {

    this.authService.register(this.email, this.password).subscribe(
      res => {

        this.displayMessage = true;
        this.alertMessage = 'Registration Successful';
      },
      res => {

        this.displayMessage = true;
        this.alertMessage = 'Invalid Registration';
      });
  }
}
