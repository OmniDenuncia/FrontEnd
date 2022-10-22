import { PerfilService, Tip } from './perfil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public tip!: string;
  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.perfilService.getTip()
      .subscribe((tip) => {
        this.tip = tip.slip.advice;
      });
  }

}
