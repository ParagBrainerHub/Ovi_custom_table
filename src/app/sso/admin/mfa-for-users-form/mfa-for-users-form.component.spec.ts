import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaForUsersFormComponent } from './mfa-for-users-form.component';

describe('MfaForUsersFormComponent', () => {
  let component: MfaForUsersFormComponent;
  let fixture: ComponentFixture<MfaForUsersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaForUsersFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaForUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
