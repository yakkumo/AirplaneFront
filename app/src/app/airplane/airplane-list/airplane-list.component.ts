//Airplane-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Airplane-list',
  templateUrl: './Airplane-list.component.html',
  styleUrls: ['./Airplane-list.component.css']
})
export class AirplaneListComponent implements OnInit {

  AirplanesData: any;

  constructor(
    public apiService: ApiService,
    private toastr: ToastrService
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
    this.apiService.deleteItem(item.id).subscribe(response => {
      //Update list after delete is successful
      if(response.sucesso)
      {
        this.toastr.success(response.mensagem , 'Success', {timeOut: 3000});
        this.getAllAirplanes();
      }
      else
      {
        this.toastr.error(response.mensagem , 'Major Error', {timeOut: 3000});
      }
    });
  }
}
