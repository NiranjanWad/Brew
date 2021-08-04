import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraphPage } from './graph';

@NgModule({
  declarations: [
    GraphPage,
  ],
  imports: [
    IonicPageModule.forChild(GraphPage),
  ],
})
export class GraphPageModule {}
