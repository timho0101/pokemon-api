import { Component, OnInit, Input } from '@angular/core';
import { TypesColorService } from 'src/app/services/typesColor.service';

@Component({
  selector: 'app-floating-pokemeon-type',
  templateUrl: './floating-pokemeon-type.component.html',
  styleUrls: ['./floating-pokemeon-type.component.scss']
})
export class FloatingPokemeonTypeComponent implements OnInit {
  @Input() type: string = '';

  constructor(
    private colorService: TypesColorService
  ) { }

  ngOnInit(): void {
    this.colorService.getBGColor(this.type)
  }

  public getTypeColor() {
    return this.colorService.getBGColor(this.type)
  }

  public getDropShadowColor() {
    return this.colorService.getDropShadowColor(this.type)
  }

}
