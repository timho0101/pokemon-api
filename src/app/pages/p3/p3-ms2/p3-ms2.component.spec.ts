import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3Ms2Component } from './p3-ms2.component';

describe('P3Ms2Component', () => {
  let component: P3Ms2Component;
  let fixture: ComponentFixture<P3Ms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3Ms2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3Ms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
