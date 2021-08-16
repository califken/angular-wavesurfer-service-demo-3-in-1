import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwspageComponent } from './awspage.component';

describe('AwspageComponent', () => {
  let component: AwspageComponent;
  let fixture: ComponentFixture<AwspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
