import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public loading = true;

  public user = '';
  public password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 0);
  }

  onLogin(): void {
    this.router.navigate(['main']);
  }

}
