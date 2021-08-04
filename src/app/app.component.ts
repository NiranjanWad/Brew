import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import {ConnectToPage} from "../pages/connect-to/connect-to";
import {SettingsPage} from "../pages/settings/settings";
import {HistoryPage} from "../pages/history/history";
import {CreateRecipePage} from "../pages/create-recipe/create-recipe";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      });
  }

  gotoConnect(){
    this.navCtrl.setRoot(ConnectToPage);
  }

  gotoSettings(){
    this.navCtrl.setRoot(SettingsPage);
  }

  goToHistory(){
    this.navCtrl.setRoot(HistoryPage);
  }

  goToCreateRecipe(){
    this.navCtrl.push(CreateRecipePage);
  }
}
