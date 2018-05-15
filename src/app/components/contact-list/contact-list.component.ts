import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts/contacts.service';
import {Contact} from '../../services/contacts/contacts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  constructor(private contactsService: ContactsService) {
    this.contactsService.getContactsList().subscribe((data) => {
      // console.log(contacts);
      this.contacts = data;
    });
  }

  ngOnInit() {
  }

}
