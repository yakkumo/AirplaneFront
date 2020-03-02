import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAirplaneComponent } from './Airplane-update.component';

describe('UpdateAirplaneComponent', () => {
  let component: UpdateAirplaneComponent;
  let fixture: ComponentFixture<UpdateAirplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAirplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
