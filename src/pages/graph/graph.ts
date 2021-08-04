import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TemperatureDataProvider} from "../../providers/temperature-data/temperature-data";

/**
 * Generated class for the GraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {
  chartOptionsTemp: any;
  chartOptionsSG: any;
  temperatureData: any[]=[];
  desiredTemp: any;
  currentTemp: any;
  currentSG: any;
  specificGravityData: number[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private tempProvider: TemperatureDataProvider) {
  }

  ionViewDidLoad() {
    this.tempProvider.getData().subscribe(items => {
      if(items.length != 0){
        this.desiredTemp = items[0].desiredtemp;
        console.log(items);
        for (var i = 0; i < items.length; i++) {
          this.temperatureData[i] = parseFloat(items[i].temp);
          this.specificGravityData[i] = parseFloat(items[i].hydro);
          this.currentSG = parseFloat(items[i].hydro);
          this.currentTemp = parseFloat(items[i].temp);
        }

        console.log(this.temperatureData);

        this.displayCharts();
      }
    });



  }
  displayCharts(){
    //displaying charts
    this.chartOptionsTemp = {
      chart: {
        type: 'spline',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        backgroundColor: '#424242'
      },
      title: {
        text: ' ',
        align: 'left',
      },
      xAxis: {
        tickInterval: 2,
        // categories: ['6am', '8am', '10am', '12am', '2pm'],
        style: {
          color: '#ffffff',
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
        }
      },

      // colors: [{
      //   backgroundColor: '#4c4c4c',
      //   pointBackgroundColor: '#4c4c4c'
      // }],
      // yAxis: {
      //   categories: [19, 20, 21, 22, 23]
      // },
      series: [{
        data: this.temperatureData,
        lineColor:  '#ffa515',
        lineWidth: 1,
        marker: {
          enabled: false
        },
      }],
    }
    this.chartOptionsSG = {
      chart: {
        type: 'spline',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
          minWidth: 600
        },
        backgroundColor: '#424242'
      },
      title: {
        text: ' ',
        align: 'left',
      },
      xAxis: {
        labels: {
          format: '{time}'
        },
        minRange: 2
      },
      series: [{
        data: this.specificGravityData,
        lineColor:  '#ffa515',
        lineWidth: 1,
        marker: {
          enabled: false
        },
      }]
    }
  }

}
