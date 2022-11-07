import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes :Personaje[]=[
    {
      nombre:'Krillin',
      poder:700      
    },
    {
      nombre:'Goku',
      poder:15000      
    },
    {
      nombre:'Vegeta',
      poder:8500      
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje( px : Personaje) {
    console.log(px);
    this.personajes.push( px );
  }

}
