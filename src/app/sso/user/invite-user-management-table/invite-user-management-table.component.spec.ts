import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserManagementTableComponent } from './invite-user-management-table.component';

describe('InviteUserManagementTableComponent', () => {
  let component: InviteUserManagementTableComponent;
  let fixture: ComponentFixture<InviteUserManagementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteUserManagementTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteUserManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
