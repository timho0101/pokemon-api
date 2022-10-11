import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router, ActivatedRoute} from '@angular/router';
import { IconsService } from '../../services/icons.service';
import { Title } from '@angular/platform-browser';
import { LoaderService } from 'src/app/services/loader.service';
import { Subject } from 'rxjs';

interface DoubleDamageFrom {
  doubleDamageFrom: string
}
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})

export class PokemonInfoComponent implements OnInit, AfterContentChecked {
  public pkImg: string = ''
  public pkName: string = '';
  public pkType: string[] = [];
  public pkTextEntry: string = '';
  public pkJaName: string = '';
  public pkId: number = 0;
  public pkWeight: number = 0;
  public pkHeight: number = 0;
  public pkShape: string = '';
  public pkColor: string = '';
  public pkAbilities: string[] = [];
  public stats: number[] = []
  public pkAbilities_index: number[] = [];

  public doubleDamageFrom: DoubleDamageFrom[] = [];
  public doubleDamageTo: string[] = [];
  public halfDamageFrom: string[] = [];
  public halfDamageTo: string[] = [];
  public noDamageFrom: string[] = [];
  public noDamageTo: string[] = [];

  public dmgMultiplierStats: any[] = [];

  public pkRouteName = this.activatedRoute.snapshot.params['name']

  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private pokemonService: PokemonService,
    private icons: IconsService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private loaderService: LoaderService,
    private changeDetector: ChangeDetectorRef
  ) { 
  }
  
  ngOnInit(): void {
    this.icons.getIcons()
    this.fetchData(this.pkRouteName)
    this.titleService.setTitle(`PokeIndex - ${this.pokemonService.titleCase(this.pkRouteName)}`)
  }

  // fix: ExpressionChangedAfterItHasBeenCheckedError
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  public fetchData(pkName:string) {
    this.pokemonService.pokemons(pkName).subscribe(res => {
      this.pkImg = res.sprites.other['official-artwork'].front_default
      this.pkName = res.name
      this.pkId = res.id
      this.pkWeight = res.weight
      this.pkHeight = res.height

      res['types'].map((types:any) => {
        this.pkType.push(types['type']['name'])
        this.pokemonService.URL(types['type']['url']).subscribe(res => {
          res['damage_relations']['double_damage_from'].map((damageRelationNames:any) => {
            var arr: any[] = []
            arr.push(damageRelationNames['name'])
            arr.forEach(t => {
              if(!this.doubleDamageFrom.includes(t)) {
                this.doubleDamageFrom.push(t)
              }
            })
          })

          res['damage_relations']['double_damage_to'].map((damageRelationNames:any) => {
            var arr: any[] = []
            arr.push(damageRelationNames['name'])
            arr.forEach(t => {
              if(!this.doubleDamageTo.includes(t)) {
                this.doubleDamageTo.push(t)
              }
            })
          })

          res['damage_relations']['half_damage_from'].map((damageRelationNames:any) => {
            var arr: any[] = []
            arr.push(damageRelationNames['name'])

            arr.forEach(t => {
              if(!this.halfDamageFrom.includes(t)) {
                this.halfDamageFrom.push(t)
              }
            })
          })

          res['damage_relations']['half_damage_to'].map((damageRelationNames:any) => {
            var arr: any[] = []
            arr.push(damageRelationNames['name'])

            arr.forEach(t => {
              if(!this.halfDamageTo.includes(t)) {
                this.halfDamageTo.push(t)
              }
            })
          })

          res['damage_relations']['no_damage_from'].map((damageRelationNames:any) => {
            var arr: any[] = []
            arr.push(damageRelationNames['name'])
            arr.forEach(t => {
              if(!this.noDamageFrom.includes(t)) {
                this.noDamageFrom.push(t)
              }
            })
          })
          res['damage_relations']['no_damage_to'].map((damageRelationNames:any) => {
            var arr: any[] = []
            arr.push(damageRelationNames['name'])
            arr.forEach(t => {
              if(!this.noDamageTo.includes(t)) {
                this.noDamageTo.push(t)
              }
            })
          })
        })
      })

      res.stats.map((stats:any) => {
        this.stats.push(stats.base_stat)
      })

      this.pkAbilities_index.push(...Array(res.abilities.length).keys())

      res.abilities.map((params:any) => {
        this.pkAbilities.push(params.ability.name)
      })

      this.pokemonService.URL(res.species.url).subscribe(res => {
        this.pkJaName = res['names'][0].name
        this.pkColor = res.color.name
        this.pkTextEntry = res.flavor_text_entries[Math.floor(Math.random() * 20)].flavor_text
        this.pkShape = res.shape.name
      })
    })
  }
}
