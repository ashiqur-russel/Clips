import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isModalVisible = false;

  constructor(private modal: ModalService){
    console.log(modal)
  }

  ngOnInit(): void {
    
  }


}
