import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { ShowType } from '../models/show-type.enum';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.scss']
})
export class SearchShowComponent implements OnInit {

  inputText: string;
  filterText: string;
  filterChanged = new Subject<string>();
  showType: ShowType;
  showTypes = ShowType;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.completeLogin().then(user => {
      console.log(user);
      this.router.navigate(['search-shows'], { replaceUrl: true });
    })

    var urlParts = this.router.url.split('/');
    var type = urlParts[urlParts.length-1];
    this.showType = ShowType[type];

    this.filterChanged
    .subscribe(value => {
      if (value.length >= 2 || value.length == 0) {
        this.filterText = value;
      }
    });

    // I WOULD PERSONALLY USE DEBOUNCE AND ASSIGN FilterText 400ms AFTER INPUT CHANGES
    // this.filterChanged.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    // .subscribe(value => {
    //     this.filterText = value;
    // });
  }

  onNavigationChange(params: { showType: ShowType }) {
    this.showType = params.showType;
  }
}
