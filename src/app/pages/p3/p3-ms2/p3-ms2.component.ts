import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'p3-ms2',
  templateUrl: './p3-ms2.component.html',
  styleUrls: ['./p3-ms2.component.scss']
})
export class P3Ms2Component implements OnInit {
  public isHiddenPk: boolean = false
  public isHiddenMov: boolean = true
  @Input() types: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public isHiddenPokemon() {
    this.isHiddenPk = false
    this.isHiddenMov = true
  }
  public isHiddenMoves() {
    this.isHiddenMov = false
    this.isHiddenPk = true
  }
}
