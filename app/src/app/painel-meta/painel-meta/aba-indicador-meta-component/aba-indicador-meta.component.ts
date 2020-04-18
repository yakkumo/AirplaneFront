import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MockService } from '../services/mock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aba-indicador-meta',
  templateUrl: './aba-indicador-meta.component.html',
  styleUrls: ['./aba-indicador-meta.component.scss']
})
export class IndicadorMetaComponent implements OnInit {

  columns: string[];
  headers: string[];
  itens: Observable<any[]>;
  show: boolean;
  rota: string;

  @Input() tipoPainel: string;

  constructor(
    private atService: MockService,
    private router: Router
    ) {

  }
  ngOnInit() {
    console.log('TESTE1');
    this.show = true;
    this.columns = ['grupo', 'status'];
    this.headers = ['Grupo', 'Status'];
    this.itens = this.atService.DadosMock();
    this.rota = 'aprovacao-grupo/';
  }

}
