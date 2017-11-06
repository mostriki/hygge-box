import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'Hygge Box';
  user;
  private uid: string;
  private isLoggedIn: boolean;
  private userName: string;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
     if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.userName = user.displayName;
       this.uid = user.uid;
     }
   });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
