import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  public searchTerm: string = '';
  public filterdOptions: any[] = [];

  public options: any[] = [];

  public pkValue: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.options = this.pokemonService.searchKeyNames()
  }

  public filterPokemons(value:string) {
    // this.checkValue(value)
    this.filterdOptions = this.options.filter(
      item => item.name.toLowerCase().includes(value.toLowerCase())
    ).slice(0,5);
  }

  public searchPokemon(pkName:string) {
    this.router.navigate(['/pokemon', pkName])
  }

  public checkValue(str:string) {
    if(str == '') {
      this.pkValue = false
    } else {
      this.pkValue = true
    }
  }
}