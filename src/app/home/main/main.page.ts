import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public pages: {title: string, component: string, openTab?: any}[] = [];
  public rootPage = 'profile';

  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {
  }

  onCloseMenu(): void {
    this.menu.close('custom');
  }

  onOpenMenu(): void {
    this.menu.enable(true, 'custom').then(x => {
        this.menu.open('custom');
    });
  }

}
