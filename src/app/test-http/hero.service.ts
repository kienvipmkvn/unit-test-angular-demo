import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

export interface Hero {
  id: number;
  name: string;
}

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class HeroService {
  readonly heroesUrl = 'api/heroes'; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes'))
    ) as Observable<Hero[]>;
  }
  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param operation - name of the operation that failed
   */
  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message}`);
    };
  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
