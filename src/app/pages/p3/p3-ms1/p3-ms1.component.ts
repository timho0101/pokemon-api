import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TypesColorService } from 'src/app/services/typesColor.service';

interface DoubleDamageFrom {
  doubleDamageFrom: string
}

@Component({
  selector: 'app-p3-ms1',
  templateUrl: './p3-ms1.component.html',
  styleUrls: ['./p3-ms1.component.scss']
})
export class P3Ms1Component implements OnInit {
  @Input() type: string = '';
  @Input() parentData: number = 0;

  public localChildData: number = 0
  public firstValue: boolean = false
  public currValue: number = 0
  public preValue: number = 0

  public typeId: number = 0;
  public typeName: string = '';
  public typeJpName: string = '';
  public typeGeneration: string = '';
  public typeMoveDmgClass: string = '';

  public typeDoubleDmgFrom: DoubleDamageFrom[] = [];
  public typeDoubleDmgTo: string[] = [];
  public typeHalfDmgFrom: string[]= [];
  public typeHalfDmgTo: string[] = [];
  public typeNoDmgFrom: string[] = [];
  public typeNoDmgTo: string[] = [];

  constructor(
    private pokemonService: PokemonService,
    private icons: IconsService,
    private typeColorService: TypesColorService 
  ) {}

  ngOnInit(): void {
    this.icons.getIcons()

    this.pokemonService.pokemonTypes(this.type).subscribe(res => {
      res.damage_relations.double_damage_from.map((params:any) => {
        this.typeDoubleDmgFrom.push(params.name)
      })
      res.damage_relations.double_damage_to.map((params:any) => {
        this.typeDoubleDmgTo.push(params.name)
      })
      res.damage_relations.half_damage_from.map((params:any) => {
        this.typeHalfDmgFrom.push(params.name)
      })
      res.damage_relations.half_damage_to.map((params:any) => {
        this.typeHalfDmgTo.push(params.name)
      })
      res.damage_relations.no_damage_from.map((params:any) => {
        this.typeNoDmgFrom.push(params.name)
      })
      res.damage_relations.no_damage_to.map((params:any) => {
        this.typeNoDmgTo.push(params.name)
      })

      this.typeName = res.name
      this.typeId = res.id
      this.typeGeneration = res.generation.name
      if(res.move_damage_class === null) {
        this.typeMoveDmgClass = 'none'
      } else {
        this.typeMoveDmgClass = res.move_damage_class.name
      }
      this.typeJpName = res.names[0].name
    })

  }

  public getTypeColor(str:string) {
    return this.typeColorService.getBGColor(str)
  }

  public changeFromChild() {
    this.parentData -=1
    this.localChildData = this.parentData + 1
  }
}
