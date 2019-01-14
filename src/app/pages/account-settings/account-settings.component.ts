import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor ( tema: string, link: any ) {
    this.aplicarCheck(link);

    this.settingsService.aplicarTema(tema);
  }

  aplicarCheck( link: any ) {
    // cogemos todos los link con class="selector" y borramos la clase 'working'
    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const temaSeleccionado = this.settingsService.ajustes.tema;

    for ( let ref: any of selectores ) {
      if (ref.getAttribute('data-theme') === temaSeleccionado ) {
          ref.classList.add('working');
          break;
      }
    }
  }
}
