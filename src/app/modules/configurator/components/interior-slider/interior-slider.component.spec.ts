import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorSliderComponent } from './interior-slider.component';

describe('InteriorSliderComponent', () => {
  let component: InteriorSliderComponent;
  let fixture: ComponentFixture<InteriorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
