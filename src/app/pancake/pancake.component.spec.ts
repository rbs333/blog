import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeComponent } from './pancake.component';

describe('PancakeComponent', () => {
  let component: PancakeComponent;
  let fixture: ComponentFixture<PancakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PancakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PancakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
