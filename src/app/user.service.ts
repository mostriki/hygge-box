import { Injectable } from '@angular/core';
import { UserDetails } from './user-details.model';
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

  addUserById(name: string, uid: string, email: string){
    const newUser = this.database.object(`/users/` + uid);
    newUser.set({
      "name": name,
      "email": email
    });
  }
}
