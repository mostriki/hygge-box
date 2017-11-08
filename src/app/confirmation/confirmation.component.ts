import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { UserDetails } from '../user-details.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  providers: [AuthenticationService, UserService]
})
export class ConfirmationComponent implements OnInit {
  public user: any;
  private uid: string;
  cartInfo;
  fire_uid;
  cart;

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
      this.cartInfo = dataLastEmittedFromObserver.cart.info;
      this.cart = dataLastEmittedFromObserver.cart;
      this.fire_uid = this.uid
     })
  }

  confirm() {
    this.userService.confirmOrder(this.fire_uid, this.cart);
    alert("Thank you for your order. Check your email for a receipt.")
    this.router.navigate([''])
  }
}
