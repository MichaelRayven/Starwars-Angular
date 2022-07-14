import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { PlanetsComponent } from './components/planets/planets.component';

const routes: Routes = [
  {path: '', component: PlanetsComponent},
  {path: 'planet/:id', component: PlanetInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
