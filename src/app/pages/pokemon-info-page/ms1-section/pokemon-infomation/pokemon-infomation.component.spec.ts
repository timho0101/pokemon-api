import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfomationComponent } from './pokemon-infomation.component';

describe('PokemonInfomationComponent', () => {
  let component: PokemonInfomationComponent;
  let fixture: ComponentFixture<PokemonInfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonInfomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
