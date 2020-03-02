//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneCreateComponent } from './airplane/airplane-create/airplane-create.component';
import { AirplaneEditComponent } from './airplane/airplane-edit/airplane-edit.component';
import { AirplaneListComponent } from './airplane/airplane-list/airplane-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'airplane/create', component: AirplaneCreateComponent },
  { path: 'airplane/edit/:id', component: AirplaneEditComponent},
  { path: 'airplane/list', component: AirplaneListComponent } ,
  { path: 'airplane/home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
