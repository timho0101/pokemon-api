import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

interface Options {
  name: string
  img: string
  id: number
}

@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  public searchTerm: string = '';
  public filterdOptions: Options[] = [];

  public options: Options[] = [];

  public pkValue: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.options = this.pokemonService.searchNames()
  }

  public filterPokemons(value:string) {
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