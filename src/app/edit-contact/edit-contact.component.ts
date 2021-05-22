import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id: number;
  contactForm: FormGroup;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

    /* Fetch contact id from url params */
    this.id = this.route.snapshot.params['id'];

    /* Fetch contact details */
    let getContact = this.contactService.getContact(this.id);

    /* redirect to contact list if contact id not valid */
    if (getContact == undefined || getContact == null) {
      this.redirect();
    }

    /* Initialize contact form */
    this.contactForm = this.formBuilder.group({
      firstName: [getContact.firstName, [Validators.required, Validators.pattern(/^([a-zA-Z_]){2,20}$/)]],
      lastName: [getContact.lastName, [Validators.required, Validators.pattern(/^([a-zA-Z_]){2,20}$/)]],
      email: [getContact.email, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
      phoneNumber: [getContact.phoneNumber, [Validators.required, Validators.pattern(/^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}$/)]]
    });
  }
  // convenience getter for easy access to form fields
  get controls() { return this.contactForm.controls; }


  editContact() {
    if (this.contactForm.valid) {

      let contact = {
        "id": this.id,
        "firstName": this.contactForm.get('firstName').value,
        "lastName": this.contactForm.get('lastName').value,
        "email": this.contactForm.get('email').value,
        "phoneNumber": this.contactForm.get('phoneNumber').value,
        "status": "Active"
      }
      this.contactService.editContact(contact);
      this.redirect();
    }
  }

  redirect() { 
    this.router.navigateByUrl("/contacts");   
  }

}
