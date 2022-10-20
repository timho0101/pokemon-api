import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// router
import { CustomReuseStrategy } from './shared/custom-reuse-strategy';
import { RouteReuseStrategy } from '@angular/router';

// loader 
import { LoaderInterceptor } from './interceptors/loader.interceptor';

// angular material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PknamePipe } from './pipes/pkname.pipe';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MaxProgresssBarValue } from './pipes/maxProgressBarValue.pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// Components
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { TypesComponent } from './pages/p3/types.component';
import { MultipliersComponent } from './components/multipliers/multipliers.component';
import { TypeInfoComponent } from './pages/p3/type-info/type-info.component';
import { Ms1SectionComponent } from './pages/p2/ms1-section/ms1-section.component';
import { Ms2SectionComponent } from './pages/p2/ms2-section/ms2-section.component';
import { PokemonsMovesComponent } from './pages/p3/pokemons-moves/pokemons-moves.component';
import { PokemonsTypeComponent } from './pages/p3/pokemons-type/pokemons-type.component';
import { LoaderComponent } from './components/loader/loader.component';
import { Ms1Component } from './pages/p3/ms1-section/ms1/ms1.component';
import { P1Component } from './pages/p1/p1.component';
import { P1Ms1Component } from './pages/p1/p1-ms1/p1-ms1.component';
import { P2Component } from './pages/p2/p2.component'

@NgModule({
  declarations: [
    AppComponent,
    PknamePipe,
    MaxProgresssBarValue,
    Ms1SectionComponent,
    Ms2SectionComponent, 
    MultipliersComponent,
    SearchPokemonComponent,
    HeaderComponent,
    FooterComponent,
    SearchFilterPipe,
    TypesComponent,
    TypeInfoComponent,
    PokemonsMovesComponent,
    PokemonsTypeComponent,
    LoaderComponent,
    Ms1Component,
    P1Component,
    P1Ms1Component,
    P2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  exports: [ MatIconModule ],
  providers: [
    MatIconRegistry,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy}, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
