import { Component, OnInit } from '@angular/core'; 
import { Flavors } from '../flavors';
import { FLAVORS } from '../mock-flavors';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {

  flavors = FLAVORS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
