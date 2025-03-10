import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContactsStylesFormComponent } from './manage-contacts-styles-form.component';

describe('ManageContactsStylesFormComponent', () => {
  let component: ManageContactsStylesFormComponent;
  let fixture: ComponentFixture<ManageContactsStylesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageContactsStylesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContactsStylesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
