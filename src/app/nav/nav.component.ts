import { Component } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public modal:ModalService){

  }

  openModal(){
    this.modal.toggleModal()
  }

}
