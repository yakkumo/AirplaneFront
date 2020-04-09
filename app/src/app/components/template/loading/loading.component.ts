import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="overlay">
      <div class="preloading-ebsa">
        <div class="ebsa-1"></div>
        <div class="ebsa-2"></div>
        <div class="ebsa-3"></div>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
