import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL, HTTP_OPTIONS } from 'src/app/app.constants';
import { AprovacaoGrupo } from './aprovacao-grupo.model';
import { AprovacaoIndividual } from './aprovacao-individual.model';
import { AprovacaoMetasFinanceiras } from './aprovacao-metas-financeiras.model';
import { PainelIndicadorMeta } from './painel-indicador-meta.model';
import { PainelIndividual } from './painel-individual.model';
import { PainelMetaFinanceira } from './painel-meta-financeira.model';

let options = HTTP_OPTIONS;
options['responseType'] = 'text';

@Injectable({
  providedIn: 'root'
})

export class PainelMetaService {

  constructor(private http: HttpClient) { }
  
}
