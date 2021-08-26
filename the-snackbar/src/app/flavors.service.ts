import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Flavors } from './flavors';
import { FLAVORS } from './mock-flavors';

@Injectable({
  providedIn: 'root'
})
export class FlavorsService {

  getFlavors(): Observable<Flavors[]> {
    const flavors = of(FLAVORS);
    return flavors
  }

  constructor(
    private messageService: MessageService,) { }

  

}
