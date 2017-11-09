import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactEntry } from '../contact-entry.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  title: string = 'My first AGM project';
  latMap: number = 45.5231;
  lngMap: number = -122.6765;
  latMarker: number = 45.520632;
  lngMarker: number = -122.677358;
  zoom: number = 13;
  iconUrl: string = "./../../assets/img/favicon.png"

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  contact(name: string, email: string, message: string) {
    this.contactService.addContactEntry(new ContactEntry(name, email, message));
    alert("Message successfully sent! You will now taken back to our homepage.");
    this.router.navigate(['']);
  }
}
