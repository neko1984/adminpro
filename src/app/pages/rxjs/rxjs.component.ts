import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    console.log('constructor');
    let obs = new Observable(observer => {
      console.log('vuelve a crear un observable');
      let contador = 0;
      let intervalo = setInterval ( () => {

        contador += 1;

        observer.next( contador );

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {
          clearInterval(intervalo);
          observer.error('Auxilio');
        }

      }, 1000);


    });

    obs.pipe(
      retry(2)
    )

    .subscribe(
      numero => { console.log ( 'Subs ', numero ); },
      error => { console.error('Error en el obs', error); },
      () => { console.log('El observador terminó'); }
    );
  }

  ngOnInit() {
  }

}
