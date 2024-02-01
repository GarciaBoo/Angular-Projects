import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css'
})
export class SecretComponent {
  addSecret = false;
  logs = [];

  display(){
    this.addSecret = !this.addSecret;
    //this.logs.push(this.log.length + 1) saves the optional solution
    this.logs.push(new Date());
  }

}
