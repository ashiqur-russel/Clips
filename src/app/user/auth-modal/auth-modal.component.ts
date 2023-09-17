import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {

  showLogin:boolean = true;

  constructor( public modal: ModalService){}

ngOnInit(): void {
  this.modal.register('auth');
  this.modal.register('test')
}
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
