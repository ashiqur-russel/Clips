import { Component,AfterContentInit,ContentChildren,QueryList} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent {
  @ContentChildren(TabsComponent) tabs:QueryList<TabsComponent> = new QueryList()

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs= this.tabs?.filter(
      tab=>tab.active
    )

    if(!activeTabs || activeTabs.length === 0){
      this.selectTab(this.tabs!.first)
    }
    console.log(this.tabs)
  }
  selectTab(tab:TabsComponent){

    this.tabs?.forEach(tab=>{
      tab.active = false
    })
    tab.active = true
    return false;

  }

}
