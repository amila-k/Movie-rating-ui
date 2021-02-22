import { Component, Input } from '@angular/core';
import { PagingFiltering } from '../../models/paging-filtering.model';
import { ShowType } from '../../models/show-type.enum';
import { Show } from '../../models/show.model';
import { ShowService } from '../../show.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent {

  shows: Show[];
  pagingFiltering: PagingFiltering;

  _filterText: string;
  @Input() set filterText(value: string) {
    this._filterText = value;

    if (!this.pagingFiltering) {
      return;
    }

    this.pagingFiltering = new PagingFiltering(3, 1, this._filterText);
    this.getShows(this.pagingFiltering, this._showType);
  }

  _showType: ShowType;
  @Input() set showType(value: ShowType) {
    if (!value) {
      return;
    }
    
    this._showType = value;
    this.pagingFiltering = new PagingFiltering(3, 1, this._filterText);

    this.getShows(this.pagingFiltering, this._showType, false);
  }

  constructor(private readonly showService: ShowService) { }

  loadMoreShows() {
    this.pagingFiltering.pageNumber++;
    this.getShows(this.pagingFiltering, this._showType, true);
  }

  getShows(params: PagingFiltering, showType: ShowType, loadMore: boolean = false) {
    this.showService.getShows(showType, params.pageSize, params.pageNumber, params.filterText).subscribe(
      movies => {
        if (!this.shows || !loadMore) {
          this.shows = movies;
          return;
        }

        if (loadMore) {
          this.shows = [...this.shows, ...movies];

          if (movies.length < params.pageSize) {
            params.hasMoreResults = false;
          }
        }
      }
    )
  }

}
