import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

const MAX_POKEMON = 898;

@Component({
  selector: 'app-pokemon-intro-page',
  templateUrl: './pokemon-intro-page.component.html',
  styleUrls: ['./pokemon-intro-page.component.scss'],
})
export class PokemonIntroPageComponent implements OnInit {
  public div = document.createElement('div')
  public div1 = document.activeElement


  public options: any[] = []
  public pkName: string = ''

  constructor(
    private readonly pokemonService: PokemonService,
    private titleService: Title,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonById(this.getRandomInt(MAX_POKEMON)).subscribe(res => {
      console.log(res)
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
