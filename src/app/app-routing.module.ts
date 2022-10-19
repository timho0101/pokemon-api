import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './pages/p2/pokemon-info.component';
import { TypesComponent } from './pages/p3/types.component';
import { PokemonIntroPageComponent } from './pages/p1/pokemon-intro-page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: PokemonIntroPageComponent},
  { path: 'pokemon/:name', component:  PokemonInfoComponent},
  { path: 'type/:type', component:  TypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
