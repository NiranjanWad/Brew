import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from "../details/details";
import {BeerDetailsProvider}  from "../../providers/beer-details/beer-details";
@Component({
  selector: 'page-home',
  templateUrl: 'discovery.html'
})
export class DiscoveryPage {
  beerArr: any = ["Pale Lager","IPA", "English Bitter Ale", "Belgian Ales", "Stout", "Wild Ales", "Dark Lager", "German Weizen", "Pilsner", "Pale Ale", "Belgian Witbier"];
  itemExpanded: boolean = false;
  itemExpandHeight: number = 200;
  filterExpanded: boolean = false;
  filterExpandHeight: number = 200;
  beerInfoIsEmpty = true;
  beerInfo: any;
  constructor(public navCtrl: NavController, private beerDetails: BeerDetailsProvider) {

  }

  displayAll(){
    this.beerInfoIsEmpty = true;
  }

  toggleSelection(){
    this.itemExpanded = !this.itemExpanded;
  }

  toggleSelectionFilters(){
    this.filterExpanded = !this.filterExpanded;
  }

  select(item){
    // console.log(item);
    this.beerDetails.getBeerDetails(item).subscribe( data => {
      this.beerInfo = data;
     // console.log(this.beerInfo);
    });
    this.beerInfoIsEmpty = false;
  }

  log(valor){
    console.log(valor);
  }

  goToDetails(name, beerType, pic){
    // this.navCtrl.parent.select(1);
    // console.log(name);
    let data = [{
      'beerName': name,
      'type': beerType,
      'photo': pic
    }];
    this.navCtrl.push(DetailsPage,{params: this.beerInfo, params1: data[0].beerName, params2: data[0].type, params3: data[0].photo});
  }

}
