import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { UserDetails } from '../user-details.model';
import { ProductDetail } from '../product-detail.model';
import { ProductDetailService } from '../productDetail.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [AuthenticationService, UserService, ProductDetailService]
})
export class CartComponent implements OnInit {
  box: FirebaseObjectObservable<any[]>;
  public user: any;
  private uid: string;
  cart;
  fire_uid;

  constructor(public authService: AuthenticationService, public userService: UserService, private router: Router, private productDetailService: ProductDetailService) {
    this.authService.user.subscribe(user => {
        if (user == null) {
        } else {
          this.uid = user.uid;
        }
      });
    }

  ngOnInit() {
    this.box = this.productDetailService.getBoxById("0");

    this.userService.getUserById(this.uid).subscribe(dataLastEmittedFromObserver => {
      this.cart = dataLastEmittedFromObserver.cart;
      this.fire_uid = this.uid
     })
  }

  toConfirmation(shippingFName, shippingLName, shippingStreet, shippingStreet2, shippingCity, shippingState, shippingZip, cardNumber, cardExp, cardCVV, billingFName, billingLName, billingStreet, billingStreet2, billingCity, billingState, billingZip, promo, giftMessage) {
    this.userService.addToUserOrder(shippingFName, shippingLName, shippingStreet, shippingStreet2, shippingCity, shippingState, shippingZip, cardNumber, cardExp, cardCVV, billingFName, billingLName, billingStreet, billingStreet2, billingCity, billingState, billingZip, promo, giftMessage, this.fire_uid);
    this.router.navigate(['confirmation']);
  }

}
