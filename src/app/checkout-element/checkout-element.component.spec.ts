import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutElementComponent } from './checkout-element.component';

describe('CheckoutElementComponent', () => {
  let component: CheckoutElementComponent;
  let fixture: ComponentFixture<CheckoutElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
