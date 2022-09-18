import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PokemonInfoComponent } from './pages/pokemon-info-page/pokemon-info.component';
import { TypesComponent } from './pages/pokemon-element-type-page/types.component';
import { PokemonIntroPageComponent } from './pages/pokemon-intro-page/pokemon-intro-page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: PokemonIntroPageComponent},
  // { path: 'main', component: PokemonIntroPageComponent},
  { path: 'pokemon/:name', component:  PokemonInfoComponent},
  { path: 'type/:type', component:  TypesComponent},
  { path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
