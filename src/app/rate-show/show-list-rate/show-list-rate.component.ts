import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RateShow } from '../../models/rate-show.model';
import { ShowType } from '../../models/show-type.enum';
import { ShowWithRating } from '../../models/show-with-rating.model';
import { Show } from '../../models/show.model';
import { ShowService } from '../../show.service';

@Component({
  selector: 'app-show-list-rate',
  templateUrl: './show-list-rate.component.html',
  styleUrls: ['./show-list-rate.component.scss']
})
export class ShowListRateComponent implements OnInit {

  shows: ShowWithRating[];

  _showType: ShowType;
  @Input() set showType(value: ShowType) {
    if (!value) {
      return;
    }
    this._showType = value;

    this.getShows(this._showType);
  }
  
  constructor(private readonly showService: ShowService) { }

  ngOnInit() {
  }

  getShows(showType: ShowType) {
    this.showService.getShowsWithRatings(showType)
    .subscribe(shows => {
      this.shows = shows;
    })
  }

  onRate(event: any, showId: number) {
    var rate = new RateShow();
    rate.rate = event.newValue;
    rate.showId = showId;

    this.showService.rateShow(rate)
    .subscribe(show => {
      var index = this.shows.findIndex(x => x.id == show.id);
      this.shows[index].averageRate = show.averageRate;
      var showWithRating = {
        ...this.shows[index],
        userRating: rate
      };
      
      this.shows[index] = showWithRating;
    })
  }
}
