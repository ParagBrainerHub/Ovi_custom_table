import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageContactsTableComponent } from './admin-manage-contacts-table.component';

describe('AdminManageContactsTableComponent', () => {
  let component: AdminManageContactsTableComponent;
  let fixture: ComponentFixture<AdminManageContactsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageContactsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageContactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
