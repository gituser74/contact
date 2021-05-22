import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';

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

  /* Function to get count of active & inactive contacts */
  getCount() {
      this.activeContacts = this.contactList.filter(contact => contact.status === "Active");
      this.inactiveContacts = this.contactList.filter(contact => contact.status === "Inactive");
  }

  /* Function to delete/inactivate contact */
  deleteContact(contact) {
    var ask = "Are you sure, you want to delete contact '" + contact.firstName + " " + contact.lastName + "' ?";
    var result = confirm(ask);
    if (result) {
      this.contactService.activateDeactivateContact(contact.id,'Inactive');
    }
    this.getCount();
  }

  /* Function to activate deleted/inactivated contact */
  activateContact(contact) {
    var ask = "Are you sure, you want to activate contact '" + contact.firstName + " " + contact.lastName + "' ?";
    var result = confirm(ask);
    if (result) {
      this.contactService.activateDeactivateContact(contact.id,'Active');
    }
    this.getCount();
  }

  /* Navigate to add contact page */
  addContact() {
    this.router.navigateByUrl("/add-contact");
  }

  /* Navigate to edit contact page */
  editContact(data) {
    this.router.navigate(["edit-contact/" + data.id]);
  }
}
