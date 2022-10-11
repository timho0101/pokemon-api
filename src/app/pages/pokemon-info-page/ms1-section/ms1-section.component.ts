import { Component, Input, OnInit } from '@angular/core';
import { TypesColorService } from 'src/app/services/typesColor.service';
@Component({
  selector: 'app-ms1-section',
  templateUrl: './ms1-section.component.html',
  styleUrls: ['./ms1-section.component.scss']
})
export class Ms1SectionComponent implements OnInit {

  @Input() pkName: string = '';
  @Input() pkType: string[] = [];
  @Input() pkTextEntry: string = '';
  @Input() pkId: number = 0;
  @Input() pkWeight: number = 0;
  @Input() pkHeight: number = 0;
  @Input() pkAbilities_index: number[] = [];
  @Input() pkAbilities: string[] = [];
  @Input() pkJaName: string = '';
  @Input() pkImg: string = '';
  @Input() pkColor: string = '';
  @Input() pkShape: string = '';

  constructor(private colorsService: TypesColorService) { }

  ngOnInit(): void {

  }

  public getColorType(str:string):any {
    return this.colorsService.getDropShadowColor(str)
  }

  public getBGColor(str:string):any {
    return this.colorsService.getBGColor(str)
  }
}
