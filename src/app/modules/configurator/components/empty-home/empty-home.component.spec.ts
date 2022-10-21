import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyHomeComponent } from './empty-home.component';

describe('EmptyHomeComponent', () => {
  let component: EmptyHomeComponent;
  let fixture: ComponentFixture<EmptyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
