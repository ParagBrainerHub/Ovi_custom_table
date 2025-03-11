import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppTypeTableComponent } from './manage-app-type-table.component';

describe('ManageAppTypeTableComponent', () => {
  let component: ManageAppTypeTableComponent;
  let fixture: ComponentFixture<ManageAppTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppTypeTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAppTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
