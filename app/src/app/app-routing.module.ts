//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneCreateComponent } from './Airplane-create/Airplane-create.component';
import { AirplaneEditComponent } from './Airplane-edit/Airplane-edit.component';
import { AirplaneListComponent } from './Airplane-list/Airplane-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'create', component: AirplaneCreateComponent },
  { path: 'edit/:id', component: AirplaneEditComponent},
  { path: 'list', component: AirplaneListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
