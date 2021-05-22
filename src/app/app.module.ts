import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
