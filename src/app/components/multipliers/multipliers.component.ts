import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, from } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TypesColorService } from 'src/app/services/typesColor.service';

interface DoubleDamageFrom {
  doubleDamageFrom: string
}

@Component({
  selector: 'app-multipliers',
  templateUrl: './multipliers.component.html',
  styleUrls: ['./multipliers.component.scss']
})
export class MultipliersComponent implements OnInit {
  @Input() doubleDamageFrom: DoubleDamageFrom[] = [];
  @Input() doubleDamageTo: string[] = [];
  @Input() halfDamageFrom: string[] = [];
  @Input() halfDamageTo: string[] = [];
  @Input() noDamageFrom: string[] = [];
  @Input() noDamageTo: string[] = [];

  public tableHeader: string[] = [
    'Take Double Damage From',
    'Deal Double Damage To',
    'Take Half Damage From',
    'Deal Half Damage To',
    'Take No Damage From',
    'Deal No Damage To'
  ]

  public headerTitle = 'Multipliers'

  public tableData: any[] = []

  constructor(
    private colorsService: TypesColorService,
    private router: Router,
    private pokeService: PokemonService
  ) { }

  ngOnInit(): void {
    this.tableData = [
      this.doubleDamageFrom,
      this.doubleDamageTo,
      this.halfDamageFrom,
      this.halfDamageTo,
      this.noDamageFrom,
      this.noDamageTo
    ]
  }

  public getColorType(str:string):any {
    return this.colorsService.getDropShadowColor(str)
  }

  public getBGColor(str:string):any {
    return this.colorsService.getBGColor(str)
  }

  public goToType(str:string):any {
    this.router.navigate(['/type', str])
  }

}
