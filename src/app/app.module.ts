import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './components/planets/planets.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetCardComponent,
    AppBarComponent,
    PlanetsComponent,
    SearchComponent,
    SearchResultComponent,
    PlanetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
