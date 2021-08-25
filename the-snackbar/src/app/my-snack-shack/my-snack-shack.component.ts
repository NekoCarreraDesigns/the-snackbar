import { Component, OnInit } from '@angular/core';
import { MySnackShack } from '../my-snack-shack';
import { Flavors } from '../flavors';
import { FLAVORS } from '../mock-flavors';
import { FlavorsService } from '../flavors.service';


@Component({
  selector: 'app-my-snack-shack',
  templateUrl: './my-snack-shack.component.html',
  styleUrls: ['./my-snack-shack.component.css']
})
export class MySnackShackComponent {

    model = new MySnackShack ("AleisterGrowley", 100, "Hummingbird")

    flavors: Flavors[] = []

    getFlavors(): void {
      this.flavorsService.getFlavors().subscribe(flavors => this.flavors = flavors)
    }

    constructor( private flavorsService: FlavorsService) {}
}
