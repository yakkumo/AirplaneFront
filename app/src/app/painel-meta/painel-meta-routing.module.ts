import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelMetaComponent } from './painel-meta/painel-meta.component';

import { AprovacaoGrupoComponent } from './painel-meta/aprovacao-grupo-component/aprovacao-grupo.component';
import { AprovacaoIndividualComponent } from './painel-meta/aprovacao-individual-component/aprovacao-individual.component';
import { AprovacaoMetaComponent } from './painel-meta/aprovacao-meta-component/aprovacao-meta.component';



const routes: Routes = [
  { path: '', component: PainelMetaComponent },
  { path: 'aprovacao-grupo/:id', component:  AprovacaoGrupoComponent},
  { path: 'aprovacao-meta/:id', component:  AprovacaoMetaComponent},
  { path: 'aprovacao-individual/:id', component: AprovacaoIndividualComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelMetaRoutingModule { }
