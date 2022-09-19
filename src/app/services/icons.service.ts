import { Inject, Injectable } from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Injectable({
  providedIn: 'root'
})

export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {}

  public getIcons() {
    this.Bug('bug')
    this.Dark('dark')
    this.Dragon('dragon')
    this.Electric('electric')
    this.Fairy('fairy')
    this.Fighting('fighting')
    this.Fire('fire')
    this.Flying('flying')
    this.Ghost('ghost')
    this.Grass('grass')
    this.Ground('ground')
    this.Ice('ice')
    this.Normal('normal')
    this.Poison('poison')
    this.Psychic('psychic')
    this.Rock('rock')
    this.Steel('steel')
    this.Water('water')
  }

  public getGithubIcon() {
    this.githubIcon('gIcon')
  }

  private githubIcon(gIcon:string): any {
    return this.iconRegistry.addSvgIcon(`${gIcon}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/github-icon.svg'));
  }
  private Bug(bug:string): any {
    return this.iconRegistry.addSvgIcon(`${bug}`, this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bug.svg'));
  }
  private Dark(dark:string): any {
    return this.iconRegistry.addSvgIcon(`${dark}`, this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dark.svg'));
  }
  private Dragon(dragon:string): any {
    return this.iconRegistry.addSvgIcon(`${dragon}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dragon.svg'));
  }
  private Electric(electric:string): any {
    return this.iconRegistry.addSvgIcon(`${electric}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/electric.svg'));
  }
  private Fairy(fairy:string): any {
    return this.iconRegistry.addSvgIcon(`${fairy}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/fairy.svg'));
  }
  private Fighting(fighting:string): any {
    return this.iconRegistry.addSvgIcon(`${fighting}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/fighting.svg'));
  }
  private Fire(fire:string): any {
    return this.iconRegistry.addSvgIcon(`${fire}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/fire.svg'));
  }
  private Flying(flying:string): any {
    return this.iconRegistry.addSvgIcon(`${flying}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flying.svg'));
  }
  private Ghost(ghost:string): any {
    return this.iconRegistry.addSvgIcon(`${ghost}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/ghost.svg'));
  }
  private Grass(grass:string): any {
    return this.iconRegistry.addSvgIcon(`${grass}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/grass.svg'));
  }
  private Ground(ground:string): any {
    return this.iconRegistry.addSvgIcon(`${ground}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/ground.svg'));
  }
  private Ice(ice:string): any {
    return this.iconRegistry.addSvgIcon(`${ice}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/ice.svg'));
  }
  private Normal(normal:string): any {
    return this.iconRegistry.addSvgIcon(`${normal}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/normal.svg'));
  }
  private Poison(poison:string): any {
    return this.iconRegistry.addSvgIcon(`${poison}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/poison.svg'));
  }
  private Psychic(psychic:string): any {
    return this.iconRegistry.addSvgIcon(`${psychic}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/psychic.svg'));
  }
  private Rock(rock:string): any {
    return this.iconRegistry.addSvgIcon(`${rock}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/rock.svg'));
  }
  private Steel(steel:string): any {
    return this.iconRegistry.addSvgIcon(`${steel}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/steel.svg'));
  }
  private Water(water:string): any {
    return this.iconRegistry.addSvgIcon(`${water}`, this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/water.svg'));
  }

}