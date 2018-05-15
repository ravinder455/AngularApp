import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from './contacts.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactsService {

  constructor(private _http: HttpClient) {}

  getContactsList(): Observable<Contact[]> {
    return this._http.get<Contact[]>('https://api.myjson.com/bins/fb6o6', httpOptions);
  }

}
