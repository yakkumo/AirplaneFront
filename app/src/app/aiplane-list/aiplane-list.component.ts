//aiplane-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-aiplane-list',
  templateUrl: './aiplane-list.component.html',
  styleUrls: ['./aiplane-list.component.css']
})
export class aiplaneListComponent implements OnInit {

  aiplanesData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.aiplanesData = [];
  }

  ngOnInit() {
    this.getAllaiplanes();
  }

  getAllaiplanes() {
    //Get saved list of aiplanes
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.aiplanesData = response;;
    })
  }


  delete(item) {
    //Delete item in aiplane data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllaiplanes();
    });
  }
}
