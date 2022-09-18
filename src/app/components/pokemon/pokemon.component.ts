import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() public pokeIndex: any[] = [];
  
  public pokemon: any;

  constructor(
    private router: Router
    ) {
  }

  ngOnInit(): void {}

  goToPokemon(name:any) {
    this.router.navigate(['/pokemon', name]);
  }

}
