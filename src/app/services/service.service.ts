import { Injectable, Input } from '@angular/core';
import { Contact } from '../interfaces/contact';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  array: Contact[]= [
    {
      firstname: "test",
      lastname: "test", 
      number: 308490283,
    }
  ]; // inizializzo l'array vuoto da riempire
  constructor() { }
  // aggiunge l'input dell'input.component all'array
  addContact(inputFirst: string, inputLast: string, inputNum: number){
    if (inputFirst == ""){
      alert('name field empty');
    }
    else if (inputLast == ""){
      alert('last name field empty');
    }
    else if (inputNum == 0){
      alert('number field empty');
    }
    else{ 
      // inizializzo una variabile contact con i tre parametri corrispondenti all'input dell'utente
      let contact = {
        firstname: inputFirst,
        lastname: inputLast,
        number: inputNum
      }
      this.array.push(contact); // pusho nell'array la variabile contact
    }
}
} 