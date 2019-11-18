import { Injectable } from '@angular/core';
import { User } from './user';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private heroesUrl = 'assets/data/user.json'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private  http: HttpClient,private messageService: MessageService) { }
  
  getHeroes(): Observable<User[]> {
   
    this.messageService.add('HeroService: fetched heroes');

    return this.http.get<User[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<User[]>('getHeroes', []))
    );
  }

  deleteHero (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }
  updateHero (user: User): Observable<any> {
    return this.http.put(this.heroesUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${user.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }



  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
