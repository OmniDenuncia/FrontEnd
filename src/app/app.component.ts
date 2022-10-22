import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pagina Inicial', url: 'home', icon: 'home', color: 'dark'},
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Denúncia', url: 'denuncia', icon: 'document' },
    { title: 'Feed de Noticias', url: 'feed', icon: 'newspaper' },
    { title: 'Mais informações', url: 'informacoes', icon: 'information-circle' },
    { title: 'Configurações e Privacidade', url: 'configuracoes', icon: 'construct' },
    { title: 'index', url: 'index', icon: 'construct' }
  ];

  constructor() {}
}
