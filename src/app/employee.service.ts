import { Injectable } from '@angular/core';
import { User } from './user';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  private heroesUrl = 'assets/data/employee.json'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private  http: HttpClient,private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
   
    this.messageService.add('HeroService: fetched heroes');

    return this.http.get<Employee[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<Employee[]>('getHeroes', []))
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.heroesUrl, employee);
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
