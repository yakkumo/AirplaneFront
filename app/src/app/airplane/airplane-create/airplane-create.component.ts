import { Component, OnInit } from '@angular/core';
import { Airplane } from '../../models/Airplane';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Airplane-create',
  templateUrl: './Airplane-create.component.html',
  styleUrls: ['./Airplane-create.component.scss']
})
export class AirplaneCreateComponent implements OnInit {

  id: number;
  airp: Airplane;
  airplaneForm: FormGroup;

  constructor(
    public apiService: ApiService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.airp = new Airplane();
  }

  ngOnInit() {
    this.airplaneForm = new FormGroup({
      'codigo': new FormControl(this.airp.codigo, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]),
      'modelo': new FormControl(this.airp.modelo, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]
      ),
      'quantidadePassageiros': new FormControl(this.airp.quantidadePassageiros, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4)
      ]
      )
    });

  }

  get codigo() { return this.airplaneForm.get('codigo'); }

  get modelo() { return this.airplaneForm.get('modelo'); }

  get quantidadePassageiros() { return this.airplaneForm.get('quantidadePassageiros'); }

  submitForm() {
    this.apiService.createItem(this.airp).subscribe((response) => {
      if(response.sucesso)
      {
        this.router.navigate(['/airplane/list']);
      }
      else
      {
        this.toastr.error(response.mensagem , 'Major Error', {timeOut: 3000});
      }
    });

  }

}
