import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Property to hold the user name
  userName = '';
  
  // Getter method to check if the user name is null or empty
  get isUserNameNull(): boolean{
    return this.userName === null || this.userName.trim() === '';
  }
  
  // Method to set the user name to an empty string
  setUserNameNull(){
    this.userName = '';
  }
}
