import { Component, OnInit } from '@angular/core'; 
import { Flavors } from '../flavors';
import { FLAVORS } from '../mock-flavors';
import { FlavorsService } from '../flavors.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {

  selectedFlavor?: Flavors;
  onSelect(flavors: Flavors): void {
    this.selectedFlavor = flavors;
    this.messageService.add(`FlavorsComponent: Selected flavor=${flavors.flavor}`)
    console.log("clicked")
  }

  flavors: Flavors[] = [];

  getFlavors(): void {
    this.flavorsService.getFlavors().subscribe(flavors => this.flavors = flavors);
  }
  
  constructor(private flavorsService: FlavorsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getFlavors();
  }

}
