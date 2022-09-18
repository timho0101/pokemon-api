import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() props: any;

  public icon = 'gIcon'

  constructor(
    private iconService: IconsService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.iconService.getGithubIcon()
  }

  public goToPokeAPI() {
    this.router.navigateByUrl('https://pokeapi.co/')
  }

}
