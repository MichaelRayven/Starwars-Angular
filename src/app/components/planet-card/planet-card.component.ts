import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/model/Planet';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {
  @Input() planet!: Planet;
  planetId!: number;
  
  constructor() { }

  ngOnInit(): void {
    this.planetId = Number.parseInt(
      this.planet.url.match(/planets\/(\d+)\//)?.pop()!
    );
  }

}
