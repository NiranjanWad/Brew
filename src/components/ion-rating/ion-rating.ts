import { Component, Input } from '@angular/core';

@Component({
  selector: 'ion-rating',
  templateUrl: 'ion-rating.html'
})
export class IonRatingComponent {

 @Input() numStars: number = 5;
 @Input() value: number = 4;
 @Input() isReadOnly: boolean = false;
 // @Output() ionClick: EventEmitter<number> = new EventEmitter<number>()
 stars: string[] = [];
 starCount: number;
  constructor() {}

  ngAfterViewInit(){
    this.calc();
    this.starCount = this.value;
  }

  calc(){
    this.stars = [];
    let temp = this.value;
    for(let i = 0; i< this.numStars; i++, temp--){
      if(temp >= 1){
        this.stars.push("star");
      }
      else if(temp > 0 && temp < 1){
        this.stars.push("star-half");
      }
      else{
        this.stars.push("star-outline");
      }
    }
  }

  // starClicked(index){
  //   if(!this.isReadOnly){
  //     // console.log(index);
  //     this.starCount = index +1;
  //     this.value = index + 1;
  //     this.ionClick.emit(this.value);
  //     this.calc();
  //   }
  // }
}
