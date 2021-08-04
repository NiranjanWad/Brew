import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the TemperatureDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TemperatureDataProvider {
  data: Observable<any>;
  constructor(public db: AngularFireDatabase) {
    console.log('Hello TemperatureDataProvider Provider');

  }

  getData(){
    this.data = this.db.list('/users/1003').valueChanges();
    return this.data;
  }



}
