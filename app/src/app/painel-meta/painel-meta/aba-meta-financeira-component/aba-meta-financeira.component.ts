import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-aba-meta-financeira',
  templateUrl: './aba-meta-financeira.component.html',
  styleUrls: ['./aba-meta-financeira.component.scss']
})
export class MetaFinanceiraComponent implements OnInit {

  columns: string[];
  headers: string[];
  itens: Observable<any[]>;
  show: boolean;
  rota: string;

  @Input() tipoPainel: string;

  constructor(private atService: MockService ) {

  }
  ngOnInit() {
    console.log('TESTE2');
    this.show = true;
    this.columns = ['uf', 'nome', 'status'];
    this.headers = ['Uf', 'Nome', 'Status'];
    this.itens = this.atService.DadosMockTr();
    this.rota = 'aprovacao-meta/';
  }

}
