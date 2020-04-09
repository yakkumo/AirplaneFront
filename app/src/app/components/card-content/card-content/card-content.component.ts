import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-content',
  template: `
    <div class="card-content">
        <div *ngIf="link">
            <a href="http://www.editoradobrasil.com.br/conteudos/{{link}}.pdf" target="_blank">
                <img src="../../../assets/img/{{backgroundImage}}.png" alt="" width="100%">
            </a>
        </div>
        <div *ngIf="!link">
            <img src="../../../assets/img/{{backgroundImage}}.png" alt="" width="100%">
        </div>
    </div>
  
  
  
  `,
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  @Input() backgroundImage: string;
  @Input() link: string;
  constructor() { }

  ngOnInit() {
        
  }

}
