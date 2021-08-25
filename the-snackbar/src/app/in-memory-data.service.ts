import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Flavors } from './flavors';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const flavors = [
      { flavor: "Lucky Charms"},
      { flavor: "Chocolate Overlord"},
      { flavor: "Sunrise Daydreams"},
      { flavor: "Hummingbird"},
      { flavor: "Lucky Charms"},
      { flavor: "Marshmallow Fudge Surprise"},
      { flavor: "Tropical Punch"},
      { flavor: "Raspberry Ganache"},
      { flavor: "Tuxedo Ganache"},
      { flavor: "Dark and Dreamy"}
    ];
    return {flavors};
  }
   genId(flavors: Flavors[]): number {
     return flavors.length
   }
  constructor() { }
}
