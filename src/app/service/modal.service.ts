import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modals: IModal[] = []


  constructor() { }
  register( id:string){
    this.modals.push({
      id,
      visible:false
    })
  }

  unRegister(id:String){
    this.modals = this.modals.filter(
      element => element.id !== id
    )
  }

  isModalOpen(id: string): boolean{
    return !!this.modals.find(element => element.id === id)?.visible;
  }

  toggleModal( id: string){
    const modal = this.modals.find(element => element.id === id);
    if(modal){
      modal.visible = !modal.visible
    }
   // this.visible = !this.visible
  }

  closeModal(){
     //this.visible = false;
  }

  
}
