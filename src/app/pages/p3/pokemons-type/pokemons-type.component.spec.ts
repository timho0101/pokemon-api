import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsTypeComponent } from './pokemons-type.component';

describe('PokemonsTypeComponent', () => {
  let component: PokemonsTypeComponent;
  let fixture: ComponentFixture<PokemonsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
