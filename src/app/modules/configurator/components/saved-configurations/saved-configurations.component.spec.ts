import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedConfigurationsComponent } from './saved-configurations.component';

describe('SavedConfigurationsComponent', () => {
  let component: SavedConfigurationsComponent;
  let fixture: ComponentFixture<SavedConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedConfigurationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
