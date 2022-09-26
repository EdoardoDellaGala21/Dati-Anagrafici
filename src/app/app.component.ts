import { Component, VERSION } from '@angular/core';
import {DatiAnagrafici} from './dati-anagrafici';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
datiGlobali: DatiAnagrafici = {
   nome: 'Edoardo',
   cognome: 'Della Gala',
   dataNascita: '21/04/2005'
 };
 lista: string[] = [
   'Mela', 'Pera', 'Banana'
 ];

 addItem(value: string) {
   this.lista.push(value);
 }
}
