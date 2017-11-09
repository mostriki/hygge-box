import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { UserDetails } from '../user-details.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AuthenticationService, UserService]
})
export class UserComponent implements OnInit {
  uid: string;
  user;
  orders: any[];
  name;

  constructor(public authService: AuthenticationService, public userService: UserService, private router: Router) {
    this.authService.user.subscribe(user => {
        if (user == null) {
        } else {
          this.uid = user.uid;
        }
      });
    }

  ngOnInit() {
    this.userService.getUserById(this.uid).subscribe(dataLastEmittedFromObserver => {
      this.user = new UserDetails(dataLastEmittedFromObserver.name,
                                         dataLastEmittedFromObserver.name,
      )
     })
  }

}
