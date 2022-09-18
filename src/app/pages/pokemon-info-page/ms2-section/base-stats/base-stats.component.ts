import { Component,ElementRef,Input, OnInit } from '@angular/core';
import { TypesColorService } from 'src/app/services/typesColor.service';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.scss']
})
export class BaseStatsComponent implements OnInit {

  @Input() types: string[] = [];
  @Input() stats: number[] = []

  public baseStatsName: string[] = ['Hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']


  constructor(
    private colorsService: TypesColorService,
  ) { }

  ngOnInit(): void {
  }

  public getBGColor(str:string):any {
    return this.colorsService.getBGColor(str)
  }


}
