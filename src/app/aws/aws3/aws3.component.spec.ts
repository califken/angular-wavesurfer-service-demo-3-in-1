import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aws3Component } from './aws3.component';

describe('Aws3Component', () => {
  let component: Aws3Component;
  let fixture: ComponentFixture<Aws3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aws3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aws3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
