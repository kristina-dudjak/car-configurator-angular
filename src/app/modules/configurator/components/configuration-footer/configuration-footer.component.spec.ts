import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationFooterComponent } from './configuration-footer.component';

describe('ConfigurationFooterComponent', () => {
  let component: ConfigurationFooterComponent;
  let fixture: ComponentFixture<ConfigurationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
