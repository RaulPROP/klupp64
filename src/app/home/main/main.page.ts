import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public pages: {title: string, component: string, openTab?: any}[] = [];
  public rootPage = 'profile';

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  onOpenMenu(): void {
    this.menu.enable(true, 'custom');
    this.menu.open('custom').then(x => {
      console.log(x);
    });
  }

}
