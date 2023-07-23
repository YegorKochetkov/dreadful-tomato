import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dreadful Tomato';
  isRoot = false;

  constructor(private location: Location, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isRoot = this.location.path() === '';
    });
  }
}
