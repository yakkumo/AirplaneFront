//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneCreateComponent } from './Airplane-create/Airplane-create.component';
import { AirplaneEditComponent } from './Airplane-edit/Airplane-edit.component';
import { AirplaneListComponent } from './Airplane-list/Airplane-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'create', component: AirplaneCreateComponent },
  { path: 'edit/:id', component: AirplaneEditComponent},
  { path: 'list', component: AirplaneListComponent } ,
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
