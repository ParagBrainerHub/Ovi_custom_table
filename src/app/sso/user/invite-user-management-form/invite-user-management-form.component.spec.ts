import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserManagementFormComponent } from './invite-user-management-form.component';

describe('InviteUserManagementFormComponent', () => {
  let component: InviteUserManagementFormComponent;
  let fixture: ComponentFixture<InviteUserManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteUserManagementFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteUserManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
