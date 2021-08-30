import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  quantities = ["Half Dozen", "One Dozen", "Two Dozen"]

  flavors =[ 'Lucky Charms', 'Chocolate Overlord', 'Sunrise Daydreams', 'Hummingbird', 'Lucky Charms', 'Marshmallow Fudge Surprise', 'Tropical Punch', 'Raspberry Ganache', 'Tuxedo Ganache', 'Dark and Dreamy'];

  model = new Purchase ("", "", 0, "", 0, this.flavors[0], this.quantities[0]);

  submitted = false; 

  onSubmit () {this.submitted = true}
}
