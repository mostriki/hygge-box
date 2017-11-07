import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  currentRoute: string = this.router.url;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
  }

}
