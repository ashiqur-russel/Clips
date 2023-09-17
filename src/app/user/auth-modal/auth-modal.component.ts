import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {

  showLogin:boolean = true;


  showLoginForm(){
    this.showLogin = true;
  }

  
  showRegisterForm(){
    this.showLogin = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Your form submission logic goes here
  }

}
