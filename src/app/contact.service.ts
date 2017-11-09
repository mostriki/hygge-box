import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ContactEntry } from './contact-entry.model';

@Injectable()
export class ContactService {
  contact_entries: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.contact_entries = database.list('contacts');
  }

  getContractEntries() {
    return this.database.list('/contacts/')
  }

  addContactEntry(new_contact_entry: ContactEntry) {
    this.contact_entries.push(new_contact_entry);
  }

}
