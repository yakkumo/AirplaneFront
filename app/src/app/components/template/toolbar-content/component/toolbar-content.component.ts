import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Icone, Button } from '../shared/toolbar-content.model';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-content',
  template: `
    <div class="toolbar-content">
      <h3 fxHide.lt-md (click)="voltarPagina(redirect)"><fa-icon [icon]="faChevronLeft">icone.icon</fa-icon> {{labelLink}}</h3>
      <h3 fxHide.gt-sm>{{labelLink}}</h3>
      <div class="toolbar-spacer"></div>
      <ul>
        <li *ngFor="let icone of icons">
          <fa-icon [icon]="icone.icon">icone.icon</fa-icon>
        </li>
      </ul>
      <ng-content></ng-content>
      <div *ngFor="let btn of buttons">
        <button fxFlex.lt-sm="100" class="btn-ebsa-secondary button-toolbar" (click)="irParaPagina(btn.action)">{{btn.nome}}</button>
      </div>
  `,
  styleUrls: ['./toolbar-content.component.scss']
})


export class ToolbarComponent {
 
  faChevronLeft = faChevronLeft;

  @Input() labelLink:string;
  @Input() icons:Icone[] = [];
  @Input() redirect: string = null;
  @Input() buttons: Button[] = [];

  voltarPagina(redirect: string){
    redirect ? this.router.navigate(["/"+redirect]) : this._location.back();
  }

  irParaPagina(pagina: string){
    this.router.navigate(["/"+pagina])
  }

  constructor(
    private _location: Location,
    private router: Router  
  ) { }
}
