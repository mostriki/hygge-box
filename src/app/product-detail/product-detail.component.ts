import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [AuthenticationService, UserService]
})
export class ProductDetailComponent implements OnInit {
  currentRoute: string = this.router.url;
  private uid: string;

  constructor(public authService: AuthenticationService, public userService: UserService, private router: Router) {
    this.authService.user.subscribe(user => {
        if (user == null) {
        } else {
          this.uid = user.uid;
        }
      });
    }

  ngOnInit() {

  }

  addToCart(boxName: string, boxPrice: number, boxLength: number) {
    this.userService.addToUserCart(boxName, boxPrice, boxLength, this.uid);
    this.router.navigate(['cart']);
  }
}
