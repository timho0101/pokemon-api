import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MultipliersComponent } from 'src/app/components/multipliers/multipliers.component';
import { SearchPokemonComponent } from 'src/app/components/search-pokemon/search-pokemon.component';
import { PknamePipe } from 'src/app/pipes/pkname.pipe';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { PokemonsMovesComponent } from './pokemons-moves/pokemons-moves.component';
import { PokemonsTypeComponent } from './pokemons-type/pokemons-type.component';
import { TypeInfoComponent } from './type-info/type-info.component';
import { TypesComponent } from './types.component';

const routes: Routes = [
  { path: '', component: TypesComponent },
  { path: 'type/:type', component: TypesComponent }
];

@NgModule({
  declarations: [
    // TypeInfoComponent,
    // TypesComponent,
    // PokemonsMovesComponent,
    // HeaderComponent,
    // FooterComponent,
    // SearchPokemonComponent,
    // PokemonsTypeComponent,
    // PknamePipe,
    // MultipliersComponent,
    // SearchFilterPipe
  ],
  imports: [
    // BrowserModule,
    // MatIconModule,
    // CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TypesModule {}