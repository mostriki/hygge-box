import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
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

  constructor(public authService: AuthenticationService, public userService: UserService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        // Sets the all important Google UID which is used to identify users
        this.uid = user.uid;
        // Checks our user database to see if they have an account with us. If not, it creates one.
        if (userService.getUserById(this.uid) === null){
          userService.addUserById(this.uid);
        }
        this.isLoggedIn = true;
        this.userName = user.displayName;

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
