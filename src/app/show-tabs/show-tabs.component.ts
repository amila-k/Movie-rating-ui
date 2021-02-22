import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ShowType } from '../models/show-type.enum';

@Component({
  selector: 'app-show-tabs',
  templateUrl: './show-tabs.component.html',
  styleUrls: ['./show-tabs.component.scss']
})
export class ShowTabsComponent implements OnInit {

  showType: ShowType;
  showTypes = ShowType;

  @Output() navigationChange = new EventEmitter<{ showType: ShowType }>();

  constructor(private router: Router) { }

  ngOnInit() {
    var firstPartOfUrl = this.router.url.split('#');
    var urlParts = firstPartOfUrl[0].split('/');
    var type = urlParts[urlParts.length-1];
    this.showType = ShowType[type];
    this.navigationChange.emit({ showType: this.showType });
  }

  navigate(showType: ShowType) {
    this.showType = showType;
    this.navigationChange.emit({ showType });
  }

}
