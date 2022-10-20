import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2Ms2Component } from './p2-ms2.component';

describe('P2Ms2Component', () => {
  let component: P2Ms2Component;
  let fixture: ComponentFixture<P2Ms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2Ms2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2Ms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
