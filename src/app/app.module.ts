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
import { PokemonInfoComponent } from './pages/pokemon-info-page/pokemon-info.component';
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
import { TypesComponent } from './pages/pokemon-element-type-page/types.component';
import { PokemonIntroPageComponent } from './pages/pokemon-intro-page/pokemon-intro-page.component';
import { BaseStatsComponent } from './pages/pokemon-info-page/ms2-section/base-stats/base-stats.component';
import { MultipliersComponent } from './components/multipliers/multipliers.component';
import { TypeInfoComponent } from './pages/pokemon-element-type-page/type-info/type-info.component';
import { TypeSelfiesComponent } from './components/type-selfies/type-selfies.component';
import { Ms1SectionComponent } from './pages/pokemon-info-page/ms1-section/ms1-section.component';
import { Ms2SectionComponent } from './pages/pokemon-info-page/ms2-section/ms2-section.component';
import { PokemonImageComponent } from './pages/pokemon-info-page/ms1-section/pokemon-image/pokemon-image.component';
import { PokemonInfomationComponent } from './pages/pokemon-info-page/ms1-section/pokemon-infomation/pokemon-infomation.component';
import { PokemonsMovesComponent } from './pages/pokemon-element-type-page/pokemons-moves/pokemons-moves.component';
import { PokemonsTypeComponent } from './pages/pokemon-element-type-page/pokemons-type/pokemons-type.component';
import { TypesModule } from './pages/pokemon-element-type-page/types.module';
import { LoaderComponent } from './components/loader/loader.component'

@NgModule({
  declarations: [
    AppComponent,
    PokemonInfoComponent,
    PknamePipe,
    MaxProgresssBarValue,
    Ms1SectionComponent,
    Ms2SectionComponent,
    PokemonImageComponent,
    PokemonInfomationComponent,
    BaseStatsComponent,
    MultipliersComponent,
    SearchPokemonComponent,
    HeaderComponent,
    FooterComponent,
    SearchFilterPipe,
    TypesComponent,
    TypeInfoComponent,
    PokemonsMovesComponent,
    PokemonsTypeComponent,
    TypeSelfiesComponent,
    PokemonIntroPageComponent,
    LoaderComponent
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
