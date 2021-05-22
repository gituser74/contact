
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /* list of contact */
  allContacts: Contact[] = [
    {
      "id": 1,
      "firstName": "Harry",
      "lastName": "Potter",
      "email": "harry@potter.com",
      "phoneNumber": "9922334455",
      "status": "Active"
    },
    {
      "id": 2,
      "firstName": "Ron",
      "lastName": "Visly",
      "email": "ron@visly.com",
      "phoneNumber": "+91-9922665778",
      "status": "Inactive"
    }
  ];

  /* get list of all contact */
  getAllContacts(): Contact[] {
    return this.allContacts;
  }

  /* Returns max id of contacts */
  getMaxId() {
    return Math.max.apply(Math, this.allContacts.map(function (x) { return x.id; }));
  }


  /* Add contact to contact list */
  addContact(contact: Contact) {
    this.allContacts.push(contact);
  }

  /* get contact details based on contact id */
  getContact(id: number) {
    var editContact = this.allContacts.find(obj => obj.id == id);
    return editContact;
  }

  /* Edit contact details */
  editContact(contact: Contact) {
    var editContact = this.allContacts.find(obj => obj.id == contact.id);
    editContact.firstName = contact.firstName;
    editContact.lastName = contact.lastName;
    editContact.email = contact.email;
    editContact.phoneNumber = contact.phoneNumber;
  }

  /* Delete/Inactivate contact from contact list */
  deleteContact(id: number) {
    this.allContacts.map(x => {
      if (x.id == id) {
        x.status = 'Inactive';
      }
    });
  }

}
