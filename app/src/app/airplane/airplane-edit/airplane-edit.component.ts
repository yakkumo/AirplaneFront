//Airplane-edit.component.ts 
import { ActivatedRoute, Router } from '@angular/router';
import { Airplane } from '../../models/Airplane';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Airplane-edit',
  templateUrl: './Airplane-edit.component.html',
  styleUrls: ['./Airplane-edit.component.css']
})
export class AirplaneEditComponent implements OnInit {

  id: number;
  airp: Airplane;
  airplaneForm: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
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

    

    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.airp = response.data;
    })
  }

  get codigo() { return this.airplaneForm.get('codigo'); }

  get modelo() { return this.airplaneForm.get('modelo'); }

  get quantidadePassageiros() { return this.airplaneForm.get('quantidadePassageiros'); }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.airp).subscribe(response => {
      if(response.sucesso)
      {
        this.router.navigate(['/airplane/list']);
      }
      else
      {
        this.toastr.error(response.mensagem , 'Major Error', {timeOut: 3000});
      }
    })
  }

}
