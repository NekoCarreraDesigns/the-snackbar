import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  constructor() { }
}
