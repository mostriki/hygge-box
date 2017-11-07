import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  product: ProductDetails[] = [
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
