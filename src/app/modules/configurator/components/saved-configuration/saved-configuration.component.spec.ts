import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedConfigurationComponent } from './saved-configuration.component';

describe('SavedConfigurationComponent', () => {
  let component: SavedConfigurationComponent;
  let fixture: ComponentFixture<SavedConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
