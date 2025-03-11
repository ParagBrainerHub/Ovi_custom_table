import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageContactsStyleTableComponent } from './admin-manage-contacts-style-table.component';

describe('AdminManageContactsStyleTableComponent', () => {
  let component: AdminManageContactsStyleTableComponent;
  let fixture: ComponentFixture<AdminManageContactsStyleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageContactsStyleTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageContactsStyleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
