import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUserById(userId: string){
    return this.database.object('/users/' + userId);
  }

  addUserById(userId: string){
    const newUser = this.database.object(`/users/` + userId);
    newUser.set({
      "Name": "bob"
    });
  }
}
