import { Component,Input, OnInit, ViewChild } from '@angular/core';

import { TypesColorService } from 'src/app/services/typesColor.service';

@Component({
  selector: 'app-ms2-section',
  templateUrl: './ms2-section.component.html',
  styleUrls: ['./ms2-section.component.scss']
})
export class Ms2SectionComponent implements OnInit {
  @Input() doubleDamageFrom: string[] = [];
  @Input() doubleDamageTo: string[] = [];
  @Input() halfDamageFrom: string[] = [];
  @Input() halfDamageTo: string[] = [];
  @Input() noDamageFrom: string[] = [];
  @Input() noDamageTo: string[] = [];
  @Input() pkType: string[] = [];
  @Input() stats: number[] = [];

  constructor(private colorsService: TypesColorService) { }

  ngOnInit(): void {}

  public getColorType(str:string):any {
    return this.colorsService.getDropShadowColor(str)
  }

  public getBGColor(str:string):any {
    return this.colorsService.getBGColor(str)
  }

}
