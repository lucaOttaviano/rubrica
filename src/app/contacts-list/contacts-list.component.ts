import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'; // import del servizio
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})

export class ContactsListComponent implements OnInit {
  array: string[] = this.serviceService.array; // inizializza l'array uguale a quello del servizio 
  constructor(private serviceService: ServiceService) { } // injection del servizio

  ngOnInit(): void {
  }

}
