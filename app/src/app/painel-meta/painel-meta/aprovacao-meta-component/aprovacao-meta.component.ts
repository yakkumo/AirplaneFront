
import { MenuService } from 'src/app/components/template/menu/shared/menu.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { MockService } from '../services/mock.service';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Component, OnInit , Input, ViewChild, ElementRef} from '@angular/core';
import { AprovacaoMetasFinanceiras } from '../shared/aprovacao-metas-financeiras.model';

import { startWith, map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aprovacao-meta-component',
  templateUrl: './aprovacao-meta.component.html',
  styleUrls: ['./aprovacao-meta.component.scss'],
})
export class AprovacaoMetaComponent implements OnInit {
  public layout = 'default';
  public loading = false;
  public backButtonHeaderMobile = true;



  @Input() id: number;
  columns: string[];
  headers: string[];
  itens: Observable<any[]>;
  show: boolean;
  rota: string;

  aprovacaoMetasFinanceiras: AprovacaoMetasFinanceiras;

  observacaoFormControl = new FormControl('', [Validators.required]);


  aprovacaoMetasFinanceirasForm = new FormGroup({
    observacao: this.observacaoFormControl
  });

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router,
    private atService: MockService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.aprovacaoMetasFinanceiras = new AprovacaoMetasFinanceiras();

  }


  ngOnInit() {
    this.show = false;
    this.columns = ['indice', 'metaReceita', 'valorRecebimento'];
    this.headers = ['#', 'Meta Receita Liquida por Região(R$)', 'Valor Recebimento(R$)'];
    this.itens = this.atService.DadosMock();
    this.rota = '';

    this.aprovacaoMetasFinanceiras.cargo = '123';
    this.aprovacaoMetasFinanceiras.nome = '456';
    this.aprovacaoMetasFinanceiras.uf = '789';

    // this.apiService.getItem(this.id).subscribe(response => {
    //   this.aprovacaoMetasFinanceiras = response.data;
    // })
  }

  get observacao() { return this.aprovacaoMetasFinanceirasForm.get('observacao'); }

  getDadosObservacao(message: string): void {
    this.aprovacaoMetasFinanceirasForm.get('observacao').setValue(message);
    this.aprovacaoMetasFinanceirasForm.get('observacao').markAsTouched();
  }


  aprovarForm() {
    const teste = this.aprovacaoMetasFinanceirasForm;
    console.log(teste);
  }

  reprovarForm() {
    const teste = this.aprovacaoMetasFinanceirasForm;
    console.log(teste);
  }
}
