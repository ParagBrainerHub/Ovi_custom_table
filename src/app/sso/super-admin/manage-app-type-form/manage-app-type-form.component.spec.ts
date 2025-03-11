import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppTypeFormComponent } from './manage-app-type-form.component';

describe('ManageAppTypeFormComponent', () => {
  let component: ManageAppTypeFormComponent;
  let fixture: ComponentFixture<ManageAppTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAppTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
