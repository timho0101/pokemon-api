import { Component,Input, OnInit } from '@angular/core';

import { TypesColorService } from 'src/app/services/typesColor.service';

interface DoubleDamageFrom {
  doubleDamageFrom: string
}


@Component({
  selector: 'app-p2-ms2',
  templateUrl: './p2-ms2.component.html',
  styleUrls: ['./p2-ms2.component.scss']
})
export class P2Ms2Component implements OnInit {
  @Input() doubleDamageFrom: DoubleDamageFrom[] = [];
  @Input() doubleDamageTo: string[] = [];
  @Input() halfDamageFrom: string[] = [];
  @Input() halfDamageTo: string[] = [];
  @Input() noDamageFrom: string[] = [];
  @Input() noDamageTo: string[] = [];
  @Input() pkType: string[] = [];
  @Input() stats: number[] = [];
 
  public baseStatsName: string[] = ['Hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']

  constructor(private colorsService: TypesColorService) { }

  ngOnInit(): void {}

  public getColorType(str:string):any {
    return this.colorsService.getDropShadowColor(str)
  }

  public getBGColor(str:string):any {
    return this.colorsService.getBGColor(str)
  }
}
