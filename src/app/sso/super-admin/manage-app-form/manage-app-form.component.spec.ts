import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppFormComponent } from './manage-app-form.component';

describe('ManageAppFormComponent', () => {
  let component: ManageAppFormComponent;
  let fixture: ComponentFixture<ManageAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
