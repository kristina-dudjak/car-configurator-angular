import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorSidebarComponent } from './interior-sidebar.component';

describe('InteriorSidebarComponent', () => {
  let component: InteriorSidebarComponent;
  let fixture: ComponentFixture<InteriorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
