import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth-service/auth.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ApiGlobals } from '../../../utility/ApiGlobals';
=======
>>>>>>> 50a6bf5e9414edbd1f83b673bde14b09b25b31b5

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

<<<<<<< HEAD
  dashboard() {
    this.router.navigateByUrl(ApiGlobals.projectsRoute);
=======
  home() {
    this.router.navigate(['/projects']);
>>>>>>> 50a6bf5e9414edbd1f83b673bde14b09b25b31b5
  }
}
