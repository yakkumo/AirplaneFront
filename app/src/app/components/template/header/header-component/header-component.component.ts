import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/user/shared/user.model';
import { UsuarioService } from 'src/app/user/shared/user.service';
import * as moment from 'moment';
import { StartupService } from 'src/app/services/startup.service';
import { AvisoService } from 'src/app/services/aviso.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponent implements OnInit {

  reason = '';
  faBell = faBell;
  faBars = faBars;
  faChevronLeft = faChevronLeft;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  
  @Input() btnBackMobile:boolean;
  @Input() rota_redirect: string = null;

  date: any;
  hour: any;

  usuario = new Usuario;
  saudacao = 'Olá';
  moment = moment().locale('pt-br').format('dddd, LL');

  voltarPagina(rota_redirect: string){
    rota_redirect ? this.router.navigate(["/"+rota_redirect]) : this._location.back();
  }

  constructor(
    private usuarioService: UsuarioService,
    private startupService: StartupService,
    private avisoService: AvisoService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.greeting();
    if (this.usuarioService.getUsuario()){
      this.usuario = this.usuarioService.getUsuario()
      this.usuario.nome = this.usuarioService.getPrimeiroNome();
    }
    else{
      this.startupService.getInicializacao().subscribe((data)=>{
        this.usuario = data.usuario;     
        this.usuario.nome = this.usuario.nome.split(' ')[0];
      }, error =>{
        this.avisoService.avisar(error, "toastl-erro");
      })
    }
  }

  greeting() {
    this.date = new Date();
    this.hour = this.date.getHours();
    if (this.hour >= 0 && this.hour <= 11) {
      this.saudacao = 'Bom dia';
    } else if (this.hour > 11 && this.hour < 18) {
      this.saudacao = "Boa tarde";
    } else if (this.hour >= 18 && this.hour <= 24) {
      this.saudacao = "Boa noite";
    }
  }

  logout(){
    this.router.navigate(["/login"]);
    this.authenticationService.logout();
  }
}
