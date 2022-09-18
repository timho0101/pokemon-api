import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingPokemeonTypeComponent } from './floating-pokemeon-type.component';

describe('FloatingPokemeonTypeComponent', () => {
  let component: FloatingPokemeonTypeComponent;
  let fixture: ComponentFixture<FloatingPokemeonTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingPokemeonTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingPokemeonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
