import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  public goToMain() {
    this.route.navigateByUrl('')
  }
}
