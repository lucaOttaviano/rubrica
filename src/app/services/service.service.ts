import { Injectable, Input } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  array: string[] = [];
  constructor() { }
  // aggiunge l'input dell'input.component all'array
  addContact(input: string){
    this.array.push(input);
    console.log(this.array);
  }
}
