import { Injectable } from '@angular/core';
import { UserDetails } from './user-details.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  orders: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUserById(userId: string){
    return this.database.object('/users/' + userId);
  }
  getOrders(userId: string) {
    return this.database.list('/users/' + userId + '/orders')
  }
  addUserById(name: string, uid: string, email: string){
    const newUser = this.database.object(`/users/` + uid);
    newUser.set({
      "name": name,
      "email": email
    });
  }

  addToUserCart(boxName: string, boxPrice: number, boxDuration: number, uid: string) {
    const newBox = this.database.object('/users/'+ uid + '/cart');
    newBox.set({
      "name": boxName,
      "price": boxPrice,
      "length": boxDuration
    })
  }
  addToUserOrder(shippingFName, shippingLName, shippingStreet, shippingStreet2, shippingCity, shippingState, shippingZip, cardNumber, cardExp, cardCVV, billingFName, billingLName, billingStreet, billingStreet2, billingCity, billingState, billingZip, promo, giftMessage, uid) {
    const newOrder = this.database.object('/users/'+ uid + '/cart/info');
    newOrder.set({
      "shippingFName": shippingFName,
      "shippingLName": shippingLName,
      "shippingStreet": shippingStreet,
      "shippingStreet2": shippingStreet2,
      "shippingCity": shippingCity,
      "shippingState": shippingState,
      "shippingZip": shippingZip,
      "billingFName": billingFName,
      "billingLName": billingLName,
      "billingStreet": billingStreet,
      "billingStreet2": billingStreet2,
      "billingCity": billingCity,
      "billingState": billingState,
      "billingZip": billingZip,
      "cardNumber": cardNumber,
      "cardExp": cardExp,
      "cardCVV": cardCVV,
      "giftMessage": giftMessage
    })
  }
  confirmOrder(userId, cart){
    const order = this.database.list('/users/' + userId + '/orders');
    order.push({
      "name": cart.name,
      "price": cart.price,
      "length": cart.length,
      "shippingFName": cart.info.shippingFName,
      "shippingLName": cart.info.shippingLName,
      "shippingStreet": cart.info.shippingStreet,
      "shippingStreet2": cart.info.shippingStreet2,
      "shippingCity": cart.info.shippingCity,
      "shippingState": cart.info.shippingState,
      "shippingZip": cart.info.shippingZip,
      "billingFName": cart.info.billingFName,
      "billingLName": cart.info.billingLName,
      "billingStreet": cart.info.billingStreet,
      "billingStreet2": cart.info.billingStreet2,
      "billingCity": cart.info.billingCity,
      "billingState": cart.info.billingState,
      "billingZip": cart.info.billingZip,
      "cardNumber": cart.info.cardNumber,
      "cardExp": cart.info.cardExp,
      "cardCVV": cart.info.cardCVV,
      "giftMessage": cart.info.giftMessage
    })
  }
}
