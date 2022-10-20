import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3Ms1Component } from './p3-ms1.component';

describe('P3Ms1Component', () => {
  let component: P3Ms1Component;
  let fixture: ComponentFixture<P3Ms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3Ms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3Ms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
