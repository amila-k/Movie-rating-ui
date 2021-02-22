import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowType } from '../models/show-type.enum';

@Component({
  selector: 'app-rate-show',
  templateUrl: './rate-show.component.html',
  styleUrls: ['./rate-show.component.scss']
})
export class RateShowComponent implements OnInit {
  showType: ShowType;
  showTypes = ShowType;

  constructor(private router: Router) { }

  ngOnInit() {
    var urlParts = this.router.url.split('/');
    var type = urlParts[urlParts.length-1];
    this.showType = ShowType[type];
  }

  onNavigationChange(params: { showType: ShowType }) {
    this.showType = params.showType;
    this.router.navigate([`rate-shows/${this.showType}`]);
  }
}
