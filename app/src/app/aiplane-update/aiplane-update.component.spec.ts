import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaiplaneComponent } from './aiplane-update.component';

describe('UpdateaiplaneComponent', () => {
  let component: UpdateaiplaneComponent;
  let fixture: ComponentFixture<UpdateaiplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateaiplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaiplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
