import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Planet } from 'src/app/model/Planet';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch
  faTimes = faTimes
  text: string = "";
  searchResults: Planet[] = [];
  subscription: Subscription | undefined;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onTextChange() {
    this.subscription?.unsubscribe();
    if (this.text) {
      this.subscription = this.dataService.searchPlanets(this.text).subscribe((res) => {
        this.searchResults = res.results.slice(0, 5);
      })
    } else {
      this.searchResults = [];
    }
  }

  getPlanetId(url: string): number {
    const id = Number.parseInt(
      url.match(/planets\/(\d+)\//)?.pop()!
    );
    return id ? id : -1;
  }

  clearInput(): void {
    this.text = "";
    this.onTextChange();
  }

  resultClick(id: number) {
    this.clearInput();
    this.router.navigate(['planet', id]);
  }
}
