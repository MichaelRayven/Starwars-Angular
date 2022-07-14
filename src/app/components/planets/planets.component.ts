import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/model/Planet';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  hasNext: boolean = true;
  page: number = 1;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets() {
    this.dataService.getPlanets(this.page).subscribe((res) => {
      this.planets = [...this.planets, ...res.results];
      this.hasNext = res.next != null;
    })
    this.page++;
  }

}
