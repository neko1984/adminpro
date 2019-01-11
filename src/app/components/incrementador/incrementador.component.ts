import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  constructor() {
  }

  @ViewChild('txtProgress') txtProgress: ElementRef//recibe como parámetro una referencia al elemento html del componente
  //parametro de entrada del componente
 @Input('nombre') leyenda: string = 'Leyenda';
 @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }

  onChanges( newValue: number) {

    
    this.cambioValor.emit(this.progreso);
    if (newValue == null ) {
      this.progreso = 0;
    }
    if ( newValue > 100 ) {
      this.progreso = 100;
    } else if ( newValue < 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso; //para no permitir datos nos validos en el txt del incrementador
  }
  cambiarValor( valor: number ) {
    if ( this.progreso + valor < 0 || this.progreso + valor > 100 ) {
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
