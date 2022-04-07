import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchFirstname: string = "";
  
  counter: number = 0;
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ----------------------- FUNZIONE PER BARRA DI RICERCA ----------------------
  // searchFunc(searchFirstname: string){ // al click del bottone di ricerca
  //   this.serviceService.array = this.emptyArr2; // l'array vecchio viene svuotato 
  //   console.log(this.emptyArr1);
  //   console.log(this.emptyArr2); 
  //   console.log(this.serviceService.array)
  //   for (let i = 0; this.emptyArr1.length; i++){ // per ogni elemento dell'array nuovo 
  //     if(this.emptyArr1[i].firstname == searchFirstname){ // verifica per ogni elemento dell'array se il firstname è == all'input
  //       this.serviceService.array[i].firstname = searchFirstname; // salva l'input nell'array che mostra a schermo i dati 
  //       console.log(this.serviceService.array)
  //     }
  //     else{
  //       console.log('error'); 
  //     }
  //   } 
  //   console.log(this.serviceService.array);
  // }
  // ------------------------ SEZIONE DI ARRAY PER RICERCA -------------------------
  // emptyArr1: Contact[]= this.serviceService.array; // l'array iniziale viene copiato 
  // // [{
  // //   firstname: "",
  // //   lastname: "",
  // //   number: 0,
  // // }]
  // emptyArr2: Contact[]= [{ // array vuoto
  //   firstname: "",
  //   lastname: "",
  //   number: 0,
  // }]
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
