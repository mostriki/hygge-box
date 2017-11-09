import { Component } from '@angular/core';
import * as firebase from "firebase";
import { UserService } from "../user.service";
import { ContactEntry } from '../contact-entry.model';
import { ContactService } from '../contact.service';
import { AuthenticationService }  from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService, ContactService]
})

export class AdminComponent {
  private user;
  private uid;
  public messages = [];

  constructor(private userService: UserService, private contactService: ContactService, private authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
        if (user == null) {
        } else {
          this.uid = user.uid;
        }
      });
    }

  ngOnInit() {
    this.contactService.getContractEntries().subscribe(dataLastEmittedFromObserver => {
      for (let message of dataLastEmittedFromObserver) {
        this.messages.push(new ContactEntry(message.name, message.email, message.message));
      }
    })
    this.userService.getUserById(this.uid).subscribe(dataLastEmittedFromObserver => {
      this.user = dataLastEmittedFromObserver;
     })
  }


  ngDoCheck() {
    // this.user = firebase.auth().currentUser;
  }
}
