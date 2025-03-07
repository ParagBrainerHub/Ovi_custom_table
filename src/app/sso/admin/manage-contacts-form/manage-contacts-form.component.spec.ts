import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContactsFormComponent } from './manage-contacts-form.component';

describe('ManageContactsFormComponent', () => {
  let component: ManageContactsFormComponent;
  let fixture: ComponentFixture<ManageContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageContactsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
