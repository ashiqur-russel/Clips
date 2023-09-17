import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

@Input() modalID = ''
  constructor(public modal: ModalService){
  }

  ngOnInit(): void {
    
  }
  onCloseModal(){
    this.modal.toggleModal(this.modalID)
  }

}
