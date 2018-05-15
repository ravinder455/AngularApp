import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../services/contacts/contacts.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
