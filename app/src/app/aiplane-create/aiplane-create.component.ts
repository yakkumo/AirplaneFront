import { Component, OnInit } from '@angular/core';
import { aiplane } from '../models/aiplane';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aiplane-create',
  templateUrl: './aiplane-create.component.html',
  styleUrls: ['./aiplane-create.component.css']
})
export class aiplaneCreateComponent implements OnInit {

  data: aiplane

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new aiplane();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });

  }

}
