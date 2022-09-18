import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() pkIntroductionPage: any;
  @Input() pkInfoPage: any;
  @Input() pkTypePage: any;

  public types: any[] = []
  constructor(
    private readonly pokemonService: PokemonService,
    ) {
  }

  ngOnInit(): void {
    this.types = this.pkInfoPage.types
  }
}
