import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
/*
  Generated class for the BeerDetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeerDetailsProvider {
  beerDetails: Observable<any>;
  grainDetails: Observable<any>;
  hopDetails: Observable<any>;
  yeastAndSugarDetails: Observable<any>;
  processDetails: Observable<any>;
  completeData: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    console.log('Hello BeerDetailsProvider Provider');
  }

  getBeerDetails(beerFamily){

    this.beerDetails = this.db.list('/recipe/'+beerFamily).valueChanges();
    return this.beerDetails;
  }

  getGrainDetails(beerName, beerType){
    this.grainDetails = this.db.list('/recipe/'+beerType+'/'+beerName+'/grains').valueChanges();
    return this.grainDetails;
  }

  getHopDetails(beerName, beerType){
    this.hopDetails = this.db.list('/recipe/'+beerType+'/'+beerName+'/hops').valueChanges();
    return this.hopDetails;
  }

  getYeastAndSugarDetails(beerName, beerType){
    this.yeastAndSugarDetails = this.db.list('/recipe/'+beerType+'/'+beerName+'/yeast and sugar').valueChanges();
    return this.yeastAndSugarDetails;
  }

  getProcess(beerName, beerType){
    this.processDetails = this.db.list('/recipe/'+beerType+'/'+beerName+'/process').valueChanges();
    return this.processDetails;
  }
}
