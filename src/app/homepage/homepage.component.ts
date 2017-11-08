import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../product-detail.model';
import { Router } from '@angular/router';
import { ProductDetailService } from '../productDetail.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ProductDetailService]
})

export class HomepageComponent implements OnInit {
  boxes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private productDetailService: ProductDetailService) { }

  ngOnInit() {
    this.boxes = this.productDetailService.getBoxes();
  }

  goToDetailPage(clickedBox) {
    this.router.navigate(['boxes', clickedBox.$key]);
  };
}
