import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    /* Initialize contact form */
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^([a-zA-Z_]){2,20}$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^([a-zA-Z_]){2,20}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}$/)]]
    });
  }

  // convenience getter for easy access to form fields
  get controls() { return this.contactForm.controls; }


  saveContact() {
    if (this.contactForm.valid) {
      let contact = {
        "id": this.contactService.getMaxId() + 1,
        "firstName": this.contactForm.get('firstName').value,
        "lastName": this.contactForm.get('lastName').value,
        "email": this.contactForm.get('email').value,
        "phoneNumber": this.contactForm.get('phoneNumber').value,
        "status": "Active"
      }
      this.contactService.addContact(contact);
      this.router.navigate(["contacts"]);
    }
  }

  redirect() { 
    this.router.navigateByUrl("/contacts");     
  }

}
