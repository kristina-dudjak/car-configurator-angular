import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementItemComponent } from './element-item.component';

describe('ElementItemComponent', () => {
  let component: ElementItemComponent;
  let fixture: ComponentFixture<ElementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
