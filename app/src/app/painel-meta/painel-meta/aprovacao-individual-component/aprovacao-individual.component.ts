import { MenuService } from 'src/app/components/template/menu/shared/menu.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { MockService } from '../services/mock.service';
import { AprovacaoIndividual } from '../shared/aprovacao-individual.model';

import {Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-aprovacao-individual-component',
  templateUrl: './aprovacao-individual.component.html',
  styleUrls: ['./aprovacao-individual.component.scss']
})
export class AprovacaoIndividualComponent implements OnInit {
  public layout = 'default';
  public loading = false;
  public backButtonHeaderMobile = true;


  @Input() id: number;
  columns: string[];
  headers: string[];
  itens: Observable<any[]>;
  show: boolean;
  rota: string;

  aprovacaoIndividual: AprovacaoIndividual;

  aprovacaoIndividualForm = new FormGroup({
    observacao: new FormControl('', [Validators.required])
  });

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router,
    private atService: MockService
  ) {
    this.aprovacaoIndividual = new AprovacaoIndividual();

  }

  ngOnInit() {
    this.show = false;
    this.columns = ['indice', 'indicador', 'meta', 'unidadeMedida', 'metaAno', 'min', 'max'];
    this.headers = ['#', 'Indicador', 'Meta', 'Unidade de Medida', 'Meta|Ano 100%', 'Min(%)', 'Max(%)'];
    this.itens = this.atService.DadosMock();
    this.rota = '';

    this.aprovacaoIndividual.cargo = '123';
    this.aprovacaoIndividual.nome = '456';
    this.aprovacaoIndividual.uf = '789';

    // this.apiService.getItem(this.id).subscribe(response => {
    //   this.aprovacaoIndividual = response.data;
    // })
  }

  get observacao() { return this.aprovacaoIndividualForm.get('observacao'); }

  getDadosObservacao(message: string): void {
    this.aprovacaoIndividualForm.get('observacao').setValue(message);
    this.aprovacaoIndividualForm.get('observacao').markAsTouched();
  }


  aprovarForm() {
    const teste = this.aprovacaoIndividualForm;
    console.log(teste);
  }

  reprovarForm() {
    const teste = this.aprovacaoIndividualForm;
    console.log(teste);
  }

}
