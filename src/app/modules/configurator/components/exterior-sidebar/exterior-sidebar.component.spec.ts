import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorSidebarComponent } from './exterior-sidebar.component';

describe('ExteriorSidebarComponent', () => {
  let component: ExteriorSidebarComponent;
  let fixture: ComponentFixture<ExteriorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExteriorSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExteriorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
