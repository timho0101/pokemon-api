import { Component, Input, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TypesColorService } from 'src/app/services/typesColor.service';

@Component({
  selector: 'pokemons-moves',
  templateUrl: './pokemons-moves.component.html',
  styleUrls: ['./pokemons-moves.component.scss']
})
export class PokemonsMovesComponent implements OnInit {
  @Input() types: string = '';
  
  public pkImg: string = ''; // res.sprites.front_default
  public pkId: number = 0; // res.id
  public pkName: string = ''; // res.name

  // pk-moves
  public pkMoves: any[] = [];

  public thead = ['Name', 'Type', 'Category', 'Power', 'PP', 'Accuracy', 'Generation'];

  constructor(
    private pokemonService: PokemonService,
    private icons: IconsService,
    private typeColorsService: TypesColorService
  ) { }

  ngOnInit(): void {
    this.icons.getIcons()

    this.pokemonService.pokemonTypes(this.types).subscribe(resx => {
      resx.moves.map((values:any) => {
        this.pokemonService.URL(values.url).subscribe(res => {
          this.pkMoves.push({
            mName: res.name,
            mType: res.type.name,
            mCategory: res.damage_class.name,
            mPower: res.power? res.power: '-',
            mPP: res.pp,
            mAccuracy: res.accuracy? res.accuracy: '-',
            mGeneration: res.generation.name,
          })
        })
      })
    })

  }

  public getTypeColor(str:string) {
    return this.typeColorsService.getBGColor(str)
  }
  public getDropShadowColor(str:string) {
    return this.typeColorsService.getDropShadowColor(str)
  }
}
