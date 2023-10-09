import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../service/modal.service';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabsComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalComponent,
    TabsComponent,
    TabsContainerComponent
  ],
  providers:[
    ModalService
  ]
})
export class SharedModule { }
