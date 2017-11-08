import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ProductDetail } from '../product-detail.model';
import { ProductDetailService } from '../productDetail.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [AuthenticationService, UserService, ProductDetailService]
})
export class ProductDetailComponent implements OnInit {
  currentRoute: string = this.router.url;
  private uid: string;
  boxId: string;
  boxToDisplay;

  constructor(
  public authService: AuthenticationService,
  public userService: UserService,
  private route: ActivatedRoute,
  private location: Location,
  private productDetailService: ProductDetailService,
  private router: Router) {
    this.authService.user.subscribe(user => {
        if (user == null) {
        } else {
          this.uid = user.uid;
        }
      });
    }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boxId = urlParameters['id'];
  });
  this.boxToDisplay = this.productDetailService.getBoxById(this.boxId);
  }

  addToCart(boxName: string, boxPrice: number, boxLength: number) {
    this.userService.addToUserCart(boxName, boxPrice, boxLength, this.uid);
    this.router.navigate(['cart']);
  }
}
