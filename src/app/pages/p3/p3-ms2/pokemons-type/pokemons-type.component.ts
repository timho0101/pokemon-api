import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemons-type',
  templateUrl: './pokemons-type.component.html',
  styleUrls: ['./pokemons-type.component.scss']
})
export class PokemonsTypeComponent implements OnInit {
  @Input() type: string = '';

  public pokemonTypes: any[] = []

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemonService.pokemonTypes(this.type).subscribe(res => {
      res.pokemon.map((props:any) => {
        this.pokemonService.pokemons(props.pokemon.name).subscribe(res => {
          if(res.sprites.other['official-artwork'].front_default) {
            this.pokemonTypes.push(
              {
                pkName: res.name,
                pkImg: res.sprites.other['official-artwork'].front_default
              }
            )
          }
        })
      })
    })
  }

  public getPokemon(pkName:string) {
    this.router.navigate(['/pokemon', pkName])
  }
}
