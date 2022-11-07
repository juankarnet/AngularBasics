import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroes:string[] = ['Spiderman', 'Ironman', 'Superman', 'Batman', 'Otroman'];
  public heroeBorrado:string = '';

  borrar(heroeIndex:number):void{
    console.log('borrando ' + heroeIndex);
    this.heroeBorrado = this.heroes[heroeIndex];
    this.heroes.splice(heroeIndex, 1);

  }
}
