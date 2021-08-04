import { Component,Input } from '@angular/core';

/**
 * Generated class for the ExpandableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {
  @Input('expanded') expanded;
  @Input('expandHeight') expandedHeight;
  @Input('filterHeight') filterExpandedHeight;

  currentHeight: number = 0;
  // beerArr: any = ["Pale Lager", "English Bitter Ale", "IPA", "Belgian Ales", "Stout", "Wild Ales", "Dark Lager", "German Weizen", "Pilsner", "Pale Ale", "Belgian Witbier"];
  constructor() {
    console.log('Hello ExpandableComponent Component');

  }

  ngAfterViewInit(){
    console.log(this.expanded);
    console.log(this.expandedHeight);
    console.log(this.filterExpandedHeight);
  }

}
