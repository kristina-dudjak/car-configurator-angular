import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigurationComponent } from './car-configuration.component';

describe('CarConfigurationComponent', () => {
  let component: CarConfigurationComponent;
  let fixture: ComponentFixture<CarConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
