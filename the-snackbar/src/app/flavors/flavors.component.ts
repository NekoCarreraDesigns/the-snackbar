import { Component, OnInit } from '@angular/core'; 
import { Flavors } from '../flavors';
@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {

flavor: Flavors = {
  type: "cake",
  flavor: "Lucky Charms",
  quantity: 36,
  availability: "In Stock",
  price: 15
}

  constructor() { }

  ngOnInit(): void {
  }

}
