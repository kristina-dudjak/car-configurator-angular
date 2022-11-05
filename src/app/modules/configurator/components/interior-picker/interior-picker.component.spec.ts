import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorPickerComponent } from './interior-picker.component';

describe('InteriorPickerComponent', () => {
  let component: InteriorPickerComponent;
  let fixture: ComponentFixture<InteriorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
