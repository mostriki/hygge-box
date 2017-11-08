import { Injectable } from '@angular/core';
import { ProductDetail } from './product-detail.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductDetailService {
  boxes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.boxes = database.list('boxes');
  }

  getBoxes() {
    return this.boxes;
  }

  getBoxById(boxId: string){
  return this.database.object('boxes/' + boxId);
}

}
