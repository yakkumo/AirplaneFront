import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-aba-painel-individual',
  templateUrl: './aba-painel-individual.component.html',
  styleUrls: ['./aba-painel-individual.component.scss']
})
export class PainelIndividualComponent implements OnInit {

  columns: string[];
  headers: string[];
  itens: Observable<any[]>;
  show: boolean;
  rota: string;

  @Input() tipoPainel: string;

  constructor(private atService: MockService ) {

  }
  ngOnInit() {
    console.log('TESTE3');
    this.show = true;
    this.columns = ['uf', 'nome', 'status'];
    this.headers = ['Uf', 'Nome', 'Status'];
    this.itens = this.atService.DadosMockTr();
    this.rota = 'aprovacao-individual/';
  }

}
