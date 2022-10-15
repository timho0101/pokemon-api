import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { HttpBackend, HttpClient } from '@angular/common/http';

const MAX_POKEMON = 898;
@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemonsURL = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonTypesURL = 'https://pokeapi.co/api/v2/type/'
  
  private http: HttpClient;

  private types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

  constructor(
    private handler: HttpBackend 
  ){
    this.http = new HttpClient(this.handler);
  }

  public URL(url:string): Observable<any> {
    return this.http.get(url)
  }

  public pokemons(pokemons:any): Observable<any> {
    return this.http.get(`${this.pokemonsURL + pokemons}`)
  }

  public pokemonTypes(pkTypes: string): Observable<any> {
    return this.http.get(`${this.pokemonTypesURL + pkTypes}`)
  }

  public getPokemonById(num:number): Observable<any> {
    return this.http.get(`${this.pokemonsURL + num}`)
  }
  public searchNames() {
    var tempArr: any[] = []
    for(var i = 1; i <= MAX_POKEMON; i++) {
      this.http.get(`${this.pokemonsURL + i}`).subscribe((res:any) => {
        if(res.sprites.front_default){
          tempArr.push({
            name: res.name,
            id: res.id,
            img: res.sprites.front_default
          })
        }
      })
    }
    return tempArr
  }

  public searchTypes() {
    var tempArr: any[] = []
    this.types.map((el:any) => {
      this.http.get(`${this.pokemonTypesURL + el}`).subscribe((res: any) => {
        tempArr.push({
          name: res.name,
          id: res.id
        })
      })
    })
    return tempArr
  }

  public titleCase(str:string) {
    let chr: string =  str.charAt(0).toUpperCase() + str.substring(1);
    return chr
  }
}