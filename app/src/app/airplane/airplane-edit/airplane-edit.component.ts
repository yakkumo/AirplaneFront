//Airplane-edit.component.ts 
import { ActivatedRoute, Router } from '@angular/router';
import { Airplane } from '../../models/Airplane';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Airplane-edit',
  templateUrl: './Airplane-edit.component.html',
  styleUrls: ['./Airplane-edit.component.css']
})
export class AirplaneEditComponent implements OnInit {

  id: number;
  hero: Airplane;
  airplaneForm: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
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

    

    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.hero = response;
    })
  }

  get codigo() { return this.airplaneForm.get('codigo'); }

  get modelo() { return this.airplaneForm.get('modelo'); }

  get quantidadePassageiros() { return this.airplaneForm.get('quantidadePassageiros'); }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.hero).subscribe(response => {
      this.router.navigate(['/airplane/list']);
    })
  }

}
