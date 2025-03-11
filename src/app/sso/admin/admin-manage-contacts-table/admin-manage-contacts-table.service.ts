import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from './admin-manage-contacts-table.model';

@Injectable({
  providedIn: 'root',
})
export class AdminManageContactsTableService {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$ = this.contactsSubject.asObservable();

  constructor() {}
  addOrUpdateContact(newContact: Contact) {
    const currentContacts = this.contactsSubject.value;
    const index = currentContacts.findIndex(
      (contact) => contact.id === newContact.id
    );

    if (index !== -1) {
      currentContacts[index] = newContact;
    } else {
      currentContacts.push(newContact);
    }
    this.contactsSubject.next([...currentContacts]);
  }
  getContacts() {
    return this.contacts$;
  }

  deleteContact(contactId: string) {
    const currentContacts = this.contactsSubject.value;
    const updatedContacts = currentContacts.filter(
      (contact) => contact.id !== contactId
    );

    this.contactsSubject.next(updatedContacts);
  }
}
