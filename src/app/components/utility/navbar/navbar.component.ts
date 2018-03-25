import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  home() {
    this.router.navigate(['/projects']);
  }
}
