import { Component, OnInit } from '@angular/core';
import {ApiGlobals} from '../../../utility/ApiGlobals';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl(ApiGlobals.loginRoute);
  }
}
