import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Perfil', url: '/perfil', icon: 'people' },
    { title: 'Configurações', url: '/configuracao', icon: 'settings' },
    { title: 'Dicas', url: '/dicas', icon: 'bulb'},

  ];

  constructor() {}
}
