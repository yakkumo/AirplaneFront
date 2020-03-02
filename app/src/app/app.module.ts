import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AirplaneCreateComponent } from './Airplane-create/Airplane-create.component';
import { AirplaneEditComponent } from './Airplane-edit/Airplane-edit.component';
import { AirplaneListComponent } from './Airplane-list/Airplane-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AirplaneCreateComponent,
    AirplaneEditComponent,
    AirplaneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
