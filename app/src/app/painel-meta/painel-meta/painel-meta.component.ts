import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/components/template/menu/shared/menu.service';

@Component({
  selector: 'app-painel-meta',
  templateUrl: './painel-meta.component.html',
  styleUrls: ['./painel-meta.component.scss']
})
export class PainelMetaComponent implements OnInit {
  public layout = 'default';
  public loading = false;
  public backButtonHeaderMobile = true;

  tabIndex = 0;

  isAprovacao: boolean;

  constructor(
    private menuService: MenuService,
  ) {

  }
  ngOnInit() {
  }

  changeTab(event)  {
    console.log(event.index);
    this.tabIndex = event.index;
  }

}
