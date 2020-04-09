import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header-component/header-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSidenavModule, MatBadgeModule, MatIconModule, MatMenuModule,
} from '@angular/material';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MenuModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
