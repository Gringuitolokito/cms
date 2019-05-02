import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contacts[] = [
    new Contacts(1, 'Bro. Jackson', 'jacksonk@byui.edu', '208-496-3771', 'https://web.byui.edu/Directory/Employee/jacksonk.jpg', 'BYUI-Profe'),
    new Contacts(2, 'Bro. Barzee', 'barzeer@byui.edu', '208-496-3768', 'https://web.byui.edu/Directory/Employee/barzeer.jpg', 'BYUI-Profe')
  ];
  constructor() { }

  ngOnInit() {
  }

}
