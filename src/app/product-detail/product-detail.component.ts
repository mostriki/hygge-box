import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ProductDetail } from '../product-detail.model';
import { ProductDetailService } from '../productDetail.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductDetailService]
})
export class ProductDetailComponent implements OnInit {
  boxId: string;
  boxToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productDetailService: ProductDetailService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boxId = urlParameters['id'];
  });
  this.boxToDisplay = this.productDetailService.getBoxById(this.boxId);
  }

}
