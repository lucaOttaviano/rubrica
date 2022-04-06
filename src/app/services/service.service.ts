import { Injectable, Input } from '@angular/core';
import { Contact } from '../interfaces/contact';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  array: Contact[]= []; // inizializzo l'array vuoto da riempire
  constructor() { }
  // aggiunge l'input dell'input.component all'array
  addContact(inputFirst: string, inputLast: string, inputNum: number){
    // inizializzo una variabile contact con i tre parametri corrispondenti all'input dell'utente
    console.log(typeof inputNum)
      let contact = {
        firstname: inputFirst,
        lastname: inputLast,
        number: inputNum
      }
      this.array.push(contact); // pusho nell'array la variabile contact

}
} 