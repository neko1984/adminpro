import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficoDona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  @Input('etiquetas') etiquetas: string[] = [];
  @Input('datos') datos: number[] = [];
  @Input('tipoGrafico') tipoGrafico: string = '';
  @Input('leyenda') leyenda: string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
