import { Component, OnInit } from '@angular/core';
import { StartupService } from 'src/app/services/startup.service';
import { Menu } from '../shared/menu.model';
import { AvisoService } from 'src/app/services/aviso.service';
import { Router } from '@angular/router';
import { MenuService } from '../shared/menu.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  activeLink: string;
  constructor(
    private startupService: StartupService,
    private avisoService: AvisoService,
    private router: Router,
    private menuService: MenuService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if (this.menuService.getMenu()){
      this.menus = this.menuService.getMenu();
    }else{
      this.startupService.getInicializacao().subscribe((data)=>{
        this.menus = data.menu;
      }, error =>{
        this.avisoService.avisar(error, "toastl-erro");
      })
    }
    this.activeLink = this.menuService.getMenuActive();
  }

  navigate(url: string){
    this.router.navigate(['/'+url])
  }

  logout(){
    this.router.navigate(["/login"]);
    this.authenticationService.logout();
  }
}
