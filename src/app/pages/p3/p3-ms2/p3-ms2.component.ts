import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p3-ms2',
  templateUrl: './p3-ms2.component.html',
  styleUrls: ['./p3-ms2.component.scss']
})
export class P3Ms2Component implements OnInit {
  public data: number = 0
  // public type: string = '';
  public isHiddenPk: boolean = false
  public isHiddenMov: boolean = true
  public pkName: string = '';
  public pkId: number = 0;
  public pkImg: string = '';
  @Input() type: string = ''

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

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
