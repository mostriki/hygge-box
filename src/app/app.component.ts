import { Component, Input } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, UserService]
})
export class AppComponent {
  title = 'HyggeBox';
  user;
  private uid: string;
  private isLoggedIn: boolean;
  private userName: string;
  private email: string;
  private currentRoute: string = this.router.url;

  constructor(public authService: AuthenticationService, public userService: UserService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        // Sets the all important Google UID which is used to identify users
        this.uid = user.uid;
        // Checks our user database to see if they have an account with us. If not, it creates ones
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.email = user.email;
      }
    });
  }

  login() {
    this.authService.login();
    this.userService.getUserById(this.uid).subscribe(potentialUser => {
      if (potentialUser.name == null) {
        this.userService.addUserById(this.userName, this.uid, this.email);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  goToNewsletterConfirmation() {
    this.router.navigate(['newsletter-confirmation']);
  }
}
