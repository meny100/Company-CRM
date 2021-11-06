import { Contact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NameSuffixPipe } from 'src/app/pipes/name-suffix.pipe';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;

  term: string = ''

  contacts$: Observable<Contact[]>;

  constructor(
    private contactsService: ContactsService,
    ) {}

  ngOnInit() {
    this.headerTitle = 'Contacts';
    this.headerIcon = 'fas fa-envelope';
    this.headerDescription = 'The Contacts';

    this.contacts$ = this.contactsService.getContacts();
  }

  searchByName(){
    this.contacts$ = this.contacts$.pipe(
      map((contacts: any) => {
        const filtered = contacts?.filter(({ name }: Contact) =>
          name.includes(this.term)
        );
        return filtered;
      })
    );
  }
  suffix = new NameSuffixPipe();
  gender(name: string, isGuy: boolean){
  return this.suffix.transform(name, isGuy);
  }
}


