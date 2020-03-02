import { Component, OnInit } from '@angular/core';
import { Airplane } from '../../models/Airplane';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Airplane-create',
  templateUrl: './Airplane-create.component.html',
  styleUrls: ['./Airplane-create.component.css']
})
export class AirplaneCreateComponent implements OnInit {

  id: number;
  hero: Airplane;
  airplaneForm: FormGroup;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.hero = new Airplane();
  }

  ngOnInit() {
    this.airplaneForm = new FormGroup({
      'codigo': new FormControl(this.hero.codigo, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'modelo': new FormControl(this.hero.modelo, [
        Validators.required,
        Validators.minLength(1)
      ]
      ),
      'quantidadePassageiros': new FormControl(this.hero.quantidadePassageiros, [
        Validators.required,
        Validators.minLength(1)
      ]
      )
    });

  }

  get codigo() { return this.airplaneForm.get('codigo'); }

  get modelo() { return this.airplaneForm.get('modelo'); }

  get quantidadePassageiros() { return this.airplaneForm.get('quantidadePassageiros'); }

  submitForm() {
    this.apiService.createItem(this.hero).subscribe((response) => {
      this.router.navigate(['/airplane/list']);
    });

  }

}
