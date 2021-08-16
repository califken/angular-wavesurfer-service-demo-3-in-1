import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aws2Component } from './aws2.component';

describe('Aws2Component', () => {
  let component: Aws2Component;
  let fixture: ComponentFixture<Aws2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aws2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aws2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
