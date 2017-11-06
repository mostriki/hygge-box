import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: []
})

export class AdminComponent {
  private user;

  constructor() { }


  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
