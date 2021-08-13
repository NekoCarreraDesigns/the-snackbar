import { Injectable } from '@angular/core';
import { Flavors } from './flavors';
import { FLAVORS } from './mock-flavors';

@Injectable({
  providedIn: 'root'
})
export class FlavorsService {

  getFlavors(): Flavors[] {
    return FLAVORS;
  }

  constructor() { }
}
