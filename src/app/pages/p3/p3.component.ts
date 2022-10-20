import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.scss']
})
export class P3Component implements OnInit, AfterContentChecked {
  public types: string = this.activatedRoute.snapshot.params['type'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private titleService: Title,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`PokeIndex - ${this.pokemonService.titleCase(this.types)}`)
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
