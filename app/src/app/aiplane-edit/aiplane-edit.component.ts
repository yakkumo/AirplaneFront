//aiplane-edit.component.ts 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { aiplane } from '../models/aiplane';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-aiplane-edit',
  templateUrl: './aiplane-edit.component.html',
  styleUrls: ['./aiplane-edit.component.css']
})
export class aiplaneEditComponent implements OnInit {

  id: number;
  data: aiplane;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new aiplane();
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
