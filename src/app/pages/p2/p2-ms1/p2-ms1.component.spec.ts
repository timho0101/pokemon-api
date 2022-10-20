import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2Ms1Component } from './p2-ms1.component';

describe('P2Ms1Component', () => {
  let component: P2Ms1Component;
  let fixture: ComponentFixture<P2Ms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2Ms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2Ms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
