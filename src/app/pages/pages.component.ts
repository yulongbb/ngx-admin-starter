import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { MENU_ITEMS } from './pages-menu';
import { PagesMenuTranslator } from './pages-menu-translator';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  
  public menu: NbMenuItem[];

  constructor(private translator: PagesMenuTranslator) {    
  }

  ngOnInit() {
    // if put on constructor it will doing twice when refresh a page.
    this.menu = this.translator.translate(MENU_ITEMS);
  }

}
