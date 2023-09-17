import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalVisible:boolean = true;

  constructor() { }

  showModal(){
    this.isModalVisible = true;
  }

  closeModal(){
    this.isModalVisible = false;

  }
}
