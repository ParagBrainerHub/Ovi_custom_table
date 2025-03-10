import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppTableComponent } from './manage-app-table.component';

describe('ManageAppTableComponent', () => {
  let component: ManageAppTableComponent;
  let fixture: ComponentFixture<ManageAppTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAppTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAppTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
