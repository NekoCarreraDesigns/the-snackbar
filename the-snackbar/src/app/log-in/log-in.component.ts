import { Component } from '@angular/core';
import { LogIn } from '../log-in';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

model = new LogIn ("", "", "", "")

submitted = false;

onSubmit () {this.submitted = true}


}
