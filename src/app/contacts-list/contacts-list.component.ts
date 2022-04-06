import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ServiceService } from '../services/service.service'; // import del servizio
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})

export class ContactsListComponent implements OnInit {
  array: Contact[] = this.serviceService.array; // inizializza l'array uguale a quello del servizio 
  // l'array a cui si appoggiano i metodi saveEdit() e closeEdit()
  empty: Contact[] = [
    {
      firstname: "",
      lastname: "",
      number: 0,
    }
  ];
  constructor(private serviceService: ServiceService) { } // injection del servizio

  ngOnInit(): void {
  }

  // le due funzioni per la modale di edit del contatto
  saveEdit(element: Contact){
    this.empty[0].firstname = element.firstname;
    this.empty[0].lastname = element.lastname;
    this.empty[0].number = element.number;
  }
  closeEdit(element: Contact){
    element.firstname = this.empty[0].firstname;
    element.lastname = this.empty[0].lastname;
    element.number = this.empty[0].number;
  }
}
