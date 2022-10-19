import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ms1Component } from './ms1.component';

describe('Ms1Component', () => {
  let component: Ms1Component;
  let fixture: ComponentFixture<Ms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
