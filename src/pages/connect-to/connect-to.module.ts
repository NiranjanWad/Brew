import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectToPage } from './connect-to';

@NgModule({
  declarations: [
    ConnectToPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectToPage),
  ],
})
export class ConnectToPageModule {}
