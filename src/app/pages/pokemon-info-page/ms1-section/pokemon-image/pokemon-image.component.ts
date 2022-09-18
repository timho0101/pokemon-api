import { Component,Input, OnInit } from '@angular/core';
import { TypesColorService } from 'src/app/services/typesColor.service';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss']
})
export class PokemonImageComponent implements OnInit {
  @Input() pkImg: string = ''
  @Input() pkType: string[] = [];
  @Input() pkJaName: string = '';

  constructor(
    private colorsService: TypesColorService
  ) { }

  ngOnInit(): void {
  }

  public getColorType(str:string): any {
    return this.colorsService.getDropShadowColor(str)
  }
}
