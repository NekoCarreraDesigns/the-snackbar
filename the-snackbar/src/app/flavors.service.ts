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
    const flavors = of(FLAVORS);
    this.messageService.add('FlavorService: fetched  flavors')
    return flavors}
  

  constructor(private flavorsService: FlavorsService, private messageService: MessageService) { }
}
