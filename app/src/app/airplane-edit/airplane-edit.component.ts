//Airplane-edit.component.ts 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airplane } from '../models/Airplane';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-Airplane-edit',
  templateUrl: './Airplane-edit.component.html',
  styleUrls: ['./Airplane-edit.component.css']
})
export class AirplaneEditComponent implements OnInit {

  id: number;
  data: Airplane;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Airplane();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['list']);
    })
  }

}
