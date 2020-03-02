import { Component, OnInit } from '@angular/core';
import { Airplane } from '../models/Airplane';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Airplane-create',
  templateUrl: './Airplane-create.component.html',
  styleUrls: ['./Airplane-create.component.css']
})
export class AirplaneCreateComponent implements OnInit {

  data: Airplane

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Airplane();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });

  }

}
