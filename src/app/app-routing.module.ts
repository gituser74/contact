import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }