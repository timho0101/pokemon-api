import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

const MAX_POKEMON = 898;

@Component({
  selector: 'p1-ms1',
  templateUrl: './p1-ms1.component.html',
  styleUrls: ['./p1-ms1.component.scss']
})
export class P1Ms1Component implements OnInit {
  public pkName: string = '';

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonById(this.getRandomInt(MAX_POKEMON)).subscribe(res => {
      this.pkName = res.name
    })
  }

  public getRandomInt(num:number) {
    return Math.floor(Math.random() * num);
  }

  public goToPokemonPage() {
    this.router.navigate(['/pokemon', this.pkName])
  }
}
