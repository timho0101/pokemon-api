import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  public data = [
    
  ]

  constructor(
    private router: Router,
    private pkService: PokemonService
    ) { }

  ngOnInit(): void {

  }


  return() {
    this.router.navigateByUrl('pokemon')
  }
}
