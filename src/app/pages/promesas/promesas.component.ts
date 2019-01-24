import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      result => console.log('Termino ', result)
    )
    .catch(error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log( contador );
        if (contador === 3) {
          clearInterval ( intervalo );
          resolve(true);
        }
      }, 1000 );
  }); // fin promesa
  }
}
