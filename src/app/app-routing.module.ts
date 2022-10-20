import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesComponent } from './pages/p3/types.component';
import { P1Component } from './pages/p1/p1.component';
import { P2Component } from './pages/p2/p2.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: P1Component},
  { path: 'pokemon/:name', component:  P2Component},
  { path: 'type/:type', component:  TypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
