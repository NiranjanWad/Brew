import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import {BatchesPage} from "../pages/batches/batches";
import {DiscoveryPage} from "../pages/discovery/discovery";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ExpandableComponent} from "../components/expandable/expandable";
import {ChartModule} from "angular2-highcharts";
import * as highcharts from "Highcharts";
import {IonRatingComponent} from "../components/ion-rating/ion-rating";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { TemperatureDataProvider } from '../providers/temperature-data/temperature-data';
import {GraphPage} from "../pages/graph/graph";
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from 'angular-svg-icon';
import {ConnectToPage} from "../pages/connect-to/connect-to";
import {SettingsPage} from "../pages/settings/settings";
import {HistoryPage} from "../pages/history/history";
import {CreateRecipePage} from "../pages/create-recipe/create-recipe";
import {DetailsPage} from "../pages/details/details";
import { BeerDetailsProvider } from '../providers/beer-details/beer-details';



export const firebaseConfig = {
  apiKey: "AIzaSyCDAcGxErsV5-HvsjySmGe0eTWUlRUgkIc",
  authDomain: "webrew-d32dd.firebaseapp.com",
  databaseURL: "https://webrew-d32dd.firebaseio.com",
  projectId: "webrew-d32dd",
  storageBucket: "webrew-d32dd.appspot.com",
  messagingSenderId: "4932929824"
};
@NgModule({
  declarations: [
    MyApp,
    BatchesPage,
    ListPage,
    DiscoveryPage,
    TabsPage,
    ExpandableComponent,
    IonRatingComponent,
    GraphPage,
    ConnectToPage,
    SettingsPage,
    HistoryPage,
    CreateRecipePage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    ChartModule,
    IonicModule.forRoot(MyApp), ChartModule.forRoot(highcharts),
    AngularFireDatabaseModule,
    HttpClientModule,
    AngularSvgIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BatchesPage,
    ListPage,
    DiscoveryPage,
    TabsPage,
    GraphPage,
    ConnectToPage,
    SettingsPage,
    HistoryPage,
    CreateRecipePage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TemperatureDataProvider,
    BeerDetailsProvider
  ]
})
export class AppModule {}
