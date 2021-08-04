import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import {BatchesPage} from "../batches/batches";
import {DiscoveryPage} from "../discovery/discovery";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DiscoveryPage;
  tab2Root = BatchesPage;
  tab3Root = ListPage;

  constructor() {

  }
}
