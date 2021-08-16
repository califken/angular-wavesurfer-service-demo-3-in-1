import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aws1Component } from './aws1.component';

describe('Aws1Component', () => {
  let component: Aws1Component;
  let fixture: ComponentFixture<Aws1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aws1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aws1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
