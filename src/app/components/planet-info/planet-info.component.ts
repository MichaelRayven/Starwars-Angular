import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { PlanetDeep } from 'src/app/model/Planet';
import { DataService } from 'src/app/services/data.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent implements OnInit {
  planet: PlanetDeep | undefined | null;
  faSpinner = faSpinner;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id: number = params['id'];
      this.dataService
        .getPlanetById(id)
        .pipe(catchError((err: HttpErrorResponse) => {
          this.planet = null;
          if (err.error instanceof ErrorEvent) {
            return throwError(() => new Error(`Error: ${err.error.message}`));
          } else {
            return throwError(
              () => new Error(`Error Code: ${err.status}\nMessage: ${err.message}`)
            );
          }
        }))
        .subscribe((res) => {
          this.planet = { ...res, residents: [], films: [] };

          res.residents.forEach((url) => {
            const strId = url.match(/people\/(\d+)\//)?.pop();
            if (strId === undefined) return;
            const id = Number.parseInt(strId);
            if (id > 0) {
              this.dataService
                .getPersonById(id)
                .pipe(catchError((err: HttpErrorResponse) => {
                  this.planet = null;
                  if (err.error instanceof ErrorEvent) {
                    return throwError(() => new Error(`Error: ${err.error.message}`));
                  } else {
                    return throwError(
                      () => new Error(`Error Code: ${err.status}\nMessage: ${err.message}`)
                    );
                  }
                }))
                .subscribe((resident) => {
                  this.planet?.residents?.push(resident);
                });
            }
          });

          res.films.forEach((url) => {
            const strId = url.match(/films\/(\d+)\//)?.pop();
            if (strId === undefined) return;
            const id = Number.parseInt(strId);
            if (id > 0) {
              this.dataService
                .getFilmById(id)
                .pipe(catchError((err: HttpErrorResponse) => {
                  this.planet = null;
                  if (err.error instanceof ErrorEvent) {
                    return throwError(() => new Error(`Error: ${err.error.message}`));
                  } else {
                    return throwError(
                      () => new Error(`Error Code: ${err.status}\nMessage: ${err.message}`)
                    );
                  }
                }))
                .subscribe((film) => {
                  this.planet?.films?.push(film);
                });
            }
          });
        });
    });
  }
}
