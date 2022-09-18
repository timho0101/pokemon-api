import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-type-selfies',
  templateUrl: './type-selfies.component.html',
  styleUrls: ['./type-selfies.component.scss']
})
export class TypeSelfiesComponent implements OnInit {
  @Input() type: string = '';

  public pokemonTypes: any[] = []

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemonService.pokemonTypes(this.type).subscribe(res => {
      console.log(res)
      res.pokemon.map((param:any) => {
        this.pokemonService.pokemons(param.pokemon.name).subscribe(res => {
          if(res.sprites.other['official-artwork'].front_default) {
            this.pokemonTypes.push(
              {
                pkName: res.name,
                pkId: res.id,
                pkImg: res.sprites.other['official-artwork'].front_default
              }
            )
          }
        })
      })
    })

    this.pokemonService.pokemons('kingdra').subscribe(res => {
      console.log(res)
    })
  }


  public getPokemon(pkName:string) {
    this.router.navigate(['/pokemon', pkName])
  }
}
