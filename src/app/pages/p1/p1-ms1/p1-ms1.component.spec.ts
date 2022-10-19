import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1Ms1Component } from './p1-ms1.component';

describe('P1Ms1Component', () => {
  let component: P1Ms1Component;
  let fixture: ComponentFixture<P1Ms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1Ms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1Ms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
