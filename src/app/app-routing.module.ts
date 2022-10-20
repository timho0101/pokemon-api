import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P1Component } from './pages/p1/p1.component';
import { P2Component } from './pages/p2/p2.component';
import { P3Component } from './pages/p3/p3.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: P1Component},
  { path: 'pokemon/:name', component:  P2Component},
  { path: 'type/:type', component:  P3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
