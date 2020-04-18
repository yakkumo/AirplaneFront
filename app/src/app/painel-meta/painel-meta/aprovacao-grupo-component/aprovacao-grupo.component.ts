import { MenuService } from 'src/app/components/template/menu/shared/menu.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { MockService } from '../services/mock.service';
import { AprovacaoGrupo } from '../shared/aprovacao-grupo.model';

import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-aprovacao-grupo-component',
  templateUrl: './aprovacao-grupo.component.html',
  styleUrls: ['./aprovacao-grupo.component.scss']
})
export class AprovacaoGrupoComponent implements OnInit {
  public layout = 'default';
  public loading = false;
  public backButtonHeaderMobile = true;


  @Input() id: number;
  columns: string[];
  headers: string[];
  itens: Observable<any[]>;
  show: boolean;
  rota: string;

  aprovacaoGrupo: AprovacaoGrupo;

  aprovacaoGrupoForm = new FormGroup({
    observacao: new FormControl('', [Validators.required])
  });

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router,
    private atService: MockService
  ) {
    this.aprovacaoGrupo = new AprovacaoGrupo();
  }


  ngOnInit() {
    this.show = false;
    this.columns = ['indice', 'indicador', 'meta', 'sistema', 'campo', 'peso'];
    this.headers = ['#', 'Indicador', 'Meta', 'Sistema', 'Campo', 'Peso(%)'];
    this.itens = this.atService.DadosMock();
    this.rota = '';

    // this.apiService.getItem(this.id).subscribe(response => {
    //   this.aprovacaoGrupo = response.data;
    // })
  }

  get observacao() { return this.aprovacaoGrupoForm.get('observacao'); }

  getDadosObservacao(message: string): void {
    this.aprovacaoGrupoForm.get('observacao').setValue(message);
    this.aprovacaoGrupoForm.get('observacao').markAsTouched();
  }


  aprovarForm() {
    const teste = this.aprovacaoGrupoForm;
    console.log(teste);
  }

  reprovarForm() {
    const teste = this.aprovacaoGrupoForm;
    console.log(teste);
  }

}
