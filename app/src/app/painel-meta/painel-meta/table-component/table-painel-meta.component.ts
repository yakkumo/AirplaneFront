import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-painel-meta',
  templateUrl: './table-painel-meta.component.html',
  styleUrls: ['./table-painel-meta.component.scss']
})
export class TableComponent implements OnInit {

  layout = 'default';
  loading = true;
  backButtonHeaderMobile = true;

  @Input() itens: Observable<any[]>;
  @Input() columns: string[];
  @Input() headers: string[];
  @Input() show: boolean;
  @Input() rota: string;

  @Input() customTitle: string;
  constructor() {

  }

  ngOnInit() {

  }
}
