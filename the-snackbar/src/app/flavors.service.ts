import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { Flavors } from './flavors';
import { FLAVORS } from './mock-flavors';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlavorsService {

  getFlavors(): Observable<Flavors[]> {
    this.messageService.add('FlavorService: fetched  flavors')
    return this.http.get<Flavors[]>(this.flavorsURL).pipe(
      catchError(this.handleError<Flavors[]>('getFlavors', []))
    )
  }
  private handleError<T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      return of (result as T);
    }
  }

  constructor(private http: HttpClient, private flavorsService: FlavorsService, private messageService: MessageService, private flavorsURL = "api/flavors") { }
}
