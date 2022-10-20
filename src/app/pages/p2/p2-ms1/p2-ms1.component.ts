import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypesColorService } from 'src/app/services/typesColor.service';

@Component({
  selector: 'p2-ms1',
  templateUrl: './p2-ms1.component.html',
  styleUrls: ['./p2-ms1.component.scss']
})
export class P2Ms1Component implements OnInit {
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

  constructor(
    private colorsService: TypesColorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getColorType(str:string):any {
    return this.colorsService.getDropShadowColor(str)
  }

  public getBGColor(str:string):any {
    return this.colorsService.getBGColor(str)
  }

  public goToType(str:string) {
    this.router.navigate(['/type', str])
  }
}
