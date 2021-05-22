import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactList: Contact[];
  activeContacts: Contact[];
  inactiveContacts: Contact[];
  deleteInfo: any = {};

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactList = this.contactService.getAllContacts();
    this.getCount();
  }

  getCount() {
      this.activeContacts = this.contactList.filter(contact => contact.status === "Active");
      this.inactiveContacts = this.contactList.filter(contact => contact.status === "Inactive");
  }
  deleteContact(contact) {
    var ask = "Are you sure, you want to delete contact '" + contact.firstName + " " + contact.lastName + "' ?";
    var result = confirm(ask);
    if (result) {
      this.contactService.activateDeactivateContact(contact.id,'Inactive');
    }
    this.getCount();
  }

  activateContact(contact) {
    var ask = "Are you sure, you want to activate contact '" + contact.firstName + " " + contact.lastName + "' ?";
    var result = confirm(ask);
    if (result) {
      this.contactService.activateDeactivateContact(contact.id,'Active');
    }
    this.getCount();
  }

  addContact() {
    this.router.navigateByUrl("/add-contact");
  }

  editContact(data) {
    this.router.navigate(["edit-contact/" + data.id]);
  }
}
