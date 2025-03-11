import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDefaultConfFormComponent } from './mfa-default-conf-form.component';

describe('MfaDefaultConfFormComponent', () => {
  let component: MfaDefaultConfFormComponent;
  let fixture: ComponentFixture<MfaDefaultConfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDefaultConfFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDefaultConfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
