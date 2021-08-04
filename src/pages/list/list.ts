import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'list.html'
})
export class ListPage {
  formattedDate: any;
  constructor(public navCtrl: NavController) {
    this.getFormat();
  }

  getFormat(){
    let dateObj = new Date();
    let year = dateObj.getFullYear().toString();
    let month = (dateObj.getMonth()+1).toString();
    let date = dateObj.getDate().toString();

    this.formattedDate = date + '.' + month + '.' + year;
  }

}
