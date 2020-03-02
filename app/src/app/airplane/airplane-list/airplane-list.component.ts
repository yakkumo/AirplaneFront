//Airplane-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-Airplane-list',
  templateUrl: './Airplane-list.component.html',
  styleUrls: ['./Airplane-list.component.css']
})
export class AirplaneListComponent implements OnInit {

  AirplanesData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.AirplanesData = [];
  }

  ngOnInit() {
    this.getAllAirplanes();
  }

  getAllAirplanes() {
    //Get saved list of Airplanes
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.AirplanesData = response;;
    })
  }


  delete(item) {
    //Delete item in Airplane data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllAirplanes();
    });
  }
}
