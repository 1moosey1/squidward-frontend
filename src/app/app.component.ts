import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private cookieService: CookieService) {}

  //checking for token!!
  checkforCookies() {
    // if(this.cookieService.check('access_token')) {
    //   console.log("there's a token");
    // } else {
    //   console.log("there are no token");
    // }
    const value: {} = this.cookieService.getAll();
    console.log(value);

  }

}
