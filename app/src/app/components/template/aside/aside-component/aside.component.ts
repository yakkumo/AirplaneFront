import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StartupService } from 'src/app/services/startup.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AvisoService } from 'src/app/services/aviso.service';
import { Usuario } from 'src/app/user/shared/user.model';
import { UsuarioService } from 'src/app/user/shared/user.service';
import { Skycons } from 'skycons-ts';

const skycons = new Skycons({'color': '#444', 'resizeClear':true});

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})


export class AsideComponent implements OnInit {
  
  percDiaAnteriorDolar = ''
  ValorDolar = 0;
  percDiaAnteriorPeso = ''
  ValorPeso = 0;
  percDiaAnteriorEuro = '';
  ValorEuro = 0;
  ValorBit = 0;
  percDiaAnteriorBit = '';
  lat = '';
  lon = '';
  cidade = '';
  temp = '';
  condicao = '';
  sensacaoTermica = '';
  umidade = '';
  pressao = '';
  velocVento = '';
  ramalSelecionado = '';
  txtRamalSelecionado = '';
  txtNomeSelecionado = '';
  objUsuarioRamal = new Usuario();
  ramais: Usuario[] = [];
  ramaisFiltrados: Observable<Usuario[]>;
  ramalFormControl = new FormControl('', [ Validators.maxLength(50)]);
  listaRamais: [] = [];

  bit: boolean = false;

  @ViewChild("ramalInput") ramalInput: ElementRef;

  constructor(private startupService: StartupService, private avisoService: AvisoService, private usuarioService: UsuarioService) { }

  async ngOnInit() {
    await this.getPosition();

    this.startupService.getLocalizacao(this.lat, this.lon).subscribe((data) => {
      this.cidade = data[0].City;
    });

    this.startupService.getPrevisao(this.lat, this.lon).subscribe((data) => {
      this.temp = parseInt(data.currently.temperature) + '°';
      this.condicao = data.currently.summary;
      this.sensacaoTermica = parseInt(data.currently.apparentTemperature) + '°';
      this.umidade = parseFloat((data.currently.humidity * 100).toFixed(2)) + '%';
      this.pressao = data.currently.pressure + ' hPa';
      this.velocVento = data.currently.windSpeed + ' km/h';
      skycons.add('imgTemp', data.currently.icon);
      skycons.play();
    });

    this.startupService.getCotacao().subscribe((data) => {
      var percDolar = parseFloat(data["USD"].pctChange.replace(',', '.'));
      this.percDiaAnteriorDolar = percDolar > 0 ? '+' + percDolar + '%' : percDolar + '%';
      this.ValorDolar = parseFloat(data["USD"].bid.replace(',', '.'));

      var percPeso = parseFloat(data["ARS"].pctChange.replace(',', '.'));
      this.percDiaAnteriorPeso = percPeso > 0 ? '+' + percPeso + '%' : percPeso + '%';
      this.ValorPeso = parseFloat(data["ARS"].bid.replace(',', '.'));

      var percEuro = parseFloat(data["EUR"].pctChange.replace(',', '.'));
      this.percDiaAnteriorEuro = percEuro > 0 ? '+' + percEuro + '%' : percEuro + '%';
      this.ValorEuro = parseFloat(data["EUR"].bid.replace(',', '.'));
    
      var percBit = parseFloat(data["BTC"].pctChange.replace(',', '.'));
      this.ValorBit = parseFloat(data["BTC"].bid.replace(',', '.'));
      this.percDiaAnteriorBit = percBit > 0 ? '+' + percBit + '%' : percBit + '%';
      console.log(data);
    });

    if (this.usuarioService.getUsuario().contaAd == "renato.oliveira") {
      this.bit = true;
    }

    this.startupService.getRamais()
      .subscribe((data) => {
        this.ramais = data;
      }
        , (error) => this.avisoService.avisar(error, 'toastl-erro')
      );

    this.listaFavoritados();
  }

  onSearchChange(searchValue: string): void {
    this.ramaisFiltrados = this.ramalFormControl.valueChanges.pipe(
      startWith(''),
      map(value =>
        this._filterRamal(searchValue))
    );
  }

  callFunctionByEnter(searchValue: string){
    var usuario = this.ramais.filter(x => x.nome == searchValue)
    if(usuario.length>0){
      this.selecionarUsuarioRamal(usuario[0]);
    }  
  }

  getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude.toString();
        this.lon = position.coords.longitude.toString();
        resolve();
      }, (err) => {
        showError(err);
        reject(err);
      });
    });
  }

  private _filterRamal(value: string): Usuario[] {
    var lowerCase = value.toLowerCase();
    return this.ramais.filter(x => x.nome.toLowerCase().includes(lowerCase))
  }

  selecionarUsuarioRamal(usuario: Usuario) {
    this.objUsuarioRamal = usuario;
    this.objUsuarioRamal.departamento = usuario.grupo.departamento;
    this.ramalSelecionado = '';
    this.txtNomeSelecionado = usuario.nome;
    this.txtRamalSelecionado = usuario.grupo.departamento + ' - ' + usuario.ramal;
  }

  adicionarAosFavoritos() {
    if (this.objUsuarioRamal.nome !== null) {
      this.objUsuarioRamal.codUsuario = this.usuarioService.getUsuario().id;

      this.startupService.addFavoritado(this.objUsuarioRamal)
        .subscribe((data) => {
          this.avisoService.avisar(data)
          this.listaFavoritados();
        },
          (error) => {
            this.avisoService.avisar(error, 'toastl-erro')
            return
          }
        );
    }
  }

  listaFavoritados() {
    this.startupService.listarFavoritados(this.usuarioService.getUsuario().id)
      .subscribe((data) => {
        if (data.length > 0) {
          this.listaRamais = data;
          this.txtNomeSelecionado = '';
          this.txtRamalSelecionado = '';
        }
      },
        (error) => {
          this.avisoService.avisar(error, 'toastl-erro')
        }
      );
  }

  excluirFavoritado(id: number, index: number) {
    this.startupService.excluirFavoritado(id)
      .subscribe((data) => {
        this.listaRamais.splice(index, 1);
        this.avisoService.avisar(data)
      },
        (error) => {
          this.avisoService.avisar(error, 'toastl-erro')
        }
      );
  }
}

function showError(error) {
  var x = document.getElementById("demo");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Localização indisponível."
      break;
    case error.TIMEOUT:
      x.innerHTML = "O tempo da requisição expirou."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "Algum erro desconhecido aconteceu."
      break;
  }
}