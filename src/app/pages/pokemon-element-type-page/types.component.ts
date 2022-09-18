import { Component, OnInit,ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit, AfterContentChecked {
  public data: number = 0

  public type: string = '';

  public isHiddenPk: boolean = false
  public isHiddenMov: boolean = true

  public pkName: string = '';
  public pkId: number = 0;
  public pkImg: string = '';

  public routeTypeName = this.activatedRoute.snapshot.params['type']

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private titleService: Title,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.type = this.routeTypeName
    this.titleService.setTitle(`PokeIndex - ${this.pokemonService.titleCase(this.routeTypeName)}`)
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
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
