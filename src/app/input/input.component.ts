import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ServiceService } from '../services/service.service'; // importazione del servizio

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  input: Contact = {
    firstname: "",
    lastname: "",
    number: 0,
  }

  constructor(private serviceService: ServiceService) { } // iniezione del servizio
  ngOnInit(): void {
  }
  // richiama la funzione addContact del service
  insert(){
    this.serviceService.addContact(this.input.firstname, this.input.lastname, this.input.number);
    this.input.firstname = "";
    this.input.lastname = "";
    this.input.number = 0;
  }
  
}

