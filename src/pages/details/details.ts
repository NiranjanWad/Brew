import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {BeerDetailsProvider}  from "../../providers/beer-details/beer-details";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
beerDetails: any;
beerName: any;
beerType: any;
grains: any;
hops: any;
yeastAndSugar: any;
process: any;
photo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private detailsProvider: BeerDetailsProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.beerDetails = this.navParams.get('params');
    this.beerName = this.navParams.get('params1');
    this.beerType = this.navParams.get('params2');
    this.photo = this.navParams.get('params3');

    //get the grains for specified beer
    this.detailsProvider.getGrainDetails(this.beerName,this.beerType).subscribe(data => {
      console.log(data);
      this.grains = data;
    });

    //get hops for specified beer
    this.detailsProvider.getHopDetails(this.beerName,this.beerType).subscribe(data => {
      this.hops = data;
    });

    //get the yeast & sugar
    this.detailsProvider.getYeastAndSugarDetails(this.beerName,this.beerType).subscribe(data => {
      this.yeastAndSugar = data;
    });

    //get the process
    this.detailsProvider.getProcess(this.beerName,this.beerType).subscribe(data => {
      this.process = data;
    });
  }

  openFav(){
    let alert = this.alertCtrl.create({
      title: 'Add to List'
    });

    alert.addInput({
      type: 'radio',
      label: 'My favourites',
      value: 'My favourites',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'IPAs',
      value: 'IPA'
    });

    alert.addInput({
      type: 'radio',
      label: 'New list 08',
      value: 'New list 08'
    });

    alert.addInput({
      type: 'radio',
      label: 'Create a new list',
      value: 'Create a new list'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        //this.testCheckboxOpen = false;
        //this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

}
