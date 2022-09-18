import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsMovesComponent } from './pokemons-moves.component';

describe('PokemonsMovesComponent', () => {
  let component: PokemonsMovesComponent;
  let fixture: ComponentFixture<PokemonsMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
