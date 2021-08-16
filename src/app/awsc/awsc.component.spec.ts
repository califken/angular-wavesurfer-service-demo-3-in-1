import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwscComponent } from './awsc.component';

describe('AwscComponent', () => {
  let component: AwscComponent;
  let fixture: ComponentFixture<AwscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
