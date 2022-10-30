import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wedding-website';

  HOME = "HOME";
  SCHEDULE = "SCHEDULE";
  FAQ = "FAQ";
  GAMES = "GAMES";

  currTab: string = this.GAMES;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrTab(newTab: string) {
    this.currTab = newTab;
  }

}