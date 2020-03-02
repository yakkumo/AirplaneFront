//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { aiplaneCreateComponent } from './aiplane-create/aiplane-create.component';
import { aiplaneEditComponent } from './aiplane-edit/aiplane-edit.component';
import { aiplaneListComponent } from './aiplane-list/aiplane-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create' },
  { path: 'create', component: aiplaneCreateComponent },
  { path: 'edit/:id', component: aiplaneEditComponent},
  { path: 'list', component: aiplaneListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
