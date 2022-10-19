import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIntroPageComponent } from './pokemon-intro-page.component';

describe('PokemonIntroPageComponent', () => {
  let component: PokemonIntroPageComponent;
  let fixture: ComponentFixture<PokemonIntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonIntroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
