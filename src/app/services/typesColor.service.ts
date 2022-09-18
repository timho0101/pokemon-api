import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class TypesColorService {
  private shadowRadius: string = `50px`;
  constructor(){}

  public getDropShadowColor(str:string): any {
    switch (str) {
      case 'bug':
        return `drop-shadow(0 0 ${this.shadowRadius} rgb(166, 185, 26)`;
      case 'dark':
        return `drop-shadow(0 0 ${this.shadowRadius} rgb(112, 87, 70)`;
      case 'dragon':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(111, 53, 252)`;
      case 'electric':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(247, 208, 44)`;
      case 'fairy':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(214, 133, 173)`;
      case 'fighting':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(194, 46, 40)`;
      case 'fire':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(238, 129, 48)`;
      case 'flying':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(169, 143, 243)`;
      case 'ghost':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(115, 87, 151)`;
      case 'grass':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(122, 199, 76)`;
      case 'ground':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(226, 191, 101)`;
      case 'ice':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(150, 217, 214)`;
      case 'normal':
        return `drop-shadow(0 0 ${this.shadowRadius} rgb(168, 167, 122)`;
      case 'poison':
        return `drop-shadow(0 0 ${this.shadowRadius} rgb(163, 62, 161)`;
      case 'psychic':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(249, 85, 135)`;
      case 'rock':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(182, 161, 54)`;
      case 'steel':
        return `drop-shadow(0 0 ${this.shadowRadius} rgb(183, 183, 206)`;
      case 'water':
        return `drop-shadow(0 0 ${this.shadowRadius}  rgb(99, 144, 240)`;
    }
  }

  public getBGColor(str:string): any {
    switch (str) {
      case 'bug':
        return 'rgb(166, 185, 26)';
      case 'dark':
        return 'rgb(112, 87, 70)';
      case 'dragon':
        return 'rgb(111, 53, 252)';
      case 'electric':
        return 'rgb(247, 208, 44)';
      case 'fairy':
        return 'rgb(214, 133, 173)';
      case 'fighting':
        return 'rgb(194, 46, 40)';
      case 'fire':
        return 'rgb(238, 129, 48)';
      case 'flying':
        return 'rgb(169, 143, 243)';
      case 'ghost':
        return 'rgb(115, 87, 151)';
      case 'grass':
        return 'rgb(122, 199, 76)';
      case 'ground':
        return 'rgb(226, 191, 101)';
      case 'ice':
        return 'rgb(150, 217, 214)';
      case 'normal':
        return 'rgb(168, 167, 122)';
      case 'poison':
        return 'rgb(163, 62, 161)';
      case 'psychic':
        return 'rgb(249, 85, 135)';
      case 'rock':
        return 'rgb(182, 161, 54)';
      case 'steel':
        return 'rgb(183, 183, 206)';
      case 'water':
        return 'rgb(99, 144, 240)';
    }
  }

}