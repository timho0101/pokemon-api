import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypesColorService } from 'src/app/services/typesColor.service';

@Component({
  selector: 'app-pokemon-infomation',
  templateUrl: './pokemon-infomation.component.html',
  styleUrls: ['./pokemon-infomation.component.scss']
})
export class PokemonInfomationComponent implements OnInit {
  @Input() pkType: string[] = [];
  @Input() pkName: string = '';
  @Input() pkTextEntry: string = '';
  @Input() pkId: number = 0;
  @Input() pkWeight: number = 0;
  @Input() pkHeight: number = 0;
  @Input() pkAbilities_index: number[] = [];
  @Input() pkAbilities: string[] = [];
  @Input() pkColor: string = '';
  @Input() pkShape: string = '';


  constructor(
    private colorsService: TypesColorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getBGColor(str:string): any {
    return this.colorsService.getBGColor(str)
  }

  public goToType(str:string) {
    this.router.navigate(['/type', str])
  }
}
