import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeWrapperComponent } from './shape-wrapper.component';

describe('ShapeWrapperComponent', () => {
  let component: ShapeWrapperComponent;
  let fixture: ComponentFixture<ShapeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
