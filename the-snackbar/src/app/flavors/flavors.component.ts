import { Component, OnInit } from '@angular/core'; 
import { Flavors } from '../flavors';
import { FLAVORS } from '../mock-flavors';
import { FlavorsService } from '../flavors.service';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {

  flavors: Flavors[] = [];

  getFlavors(): void {
    this.flavors = this.flavorsService.getFlavors();
  }
  
  constructor(private flavorsService: FlavorsService) { }

  ngOnInit(): void {
    this.getFlavors();
  }

}
