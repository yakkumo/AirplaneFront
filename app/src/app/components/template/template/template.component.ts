import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-template',
  template: `
    
    <div class="container" fxFlex="99.8%">
      <div fxLayout="row">
        <div fxFlex="100%" class="coluna-header">
          <app-header [(btnBackMobile)]="actBackButtonHeader" [rota_redirect]="redirect"></app-header>
        </div>
      </div>
      <div fxLayout="row">
        <div *ngIf="tipoLayout == 'full' || tipoLayout == 'default'" fxHide.lt-md fxFlex.gt-sm="200px" class="coluna-menu">
          <app-menu class="menu-desktop"></app-menu>
        </div>
        <div *ngIf="tipoLayout == 'full' || tipoLayout == 'default' || tipoLayout == 'content-all'" class="coluna-conteudo">
          <app-loading *ngIf="isLoading"></app-loading>
          <ng-content></ng-content>
          <div class="conteudo-footer" fxHide.lt-md>
            <app-footer></app-footer>
          </div>
          
        </div>
        <div *ngIf="tipoLayout == 'full'" fxHide.lt-md fxFlex.gt-sm="200px" class="coluna-aside">
          <app-aside></app-aside>
        </div>
      </div>      
    </div>
  `,
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  @Input() tipoLayout: string;
  @Input() isLoading: boolean = false;
  @Input() actBackButtonHeader = null;
  @Input() redirect: string;

  constructor() { }

  ngOnInit() {
  }

}
