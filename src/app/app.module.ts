import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from './app.routing';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {ContactsService} from './services/contacts/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, ContactListComponent, ContactCardComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
