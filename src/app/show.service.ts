import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Show } from "./models/show.model";
import { RateShow } from "./models/rate-show.model";
import { ShowWithRating } from "./models/show-with-rating.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ShowService {
  private url = environment.url;

  constructor(private readonly httpClient: HttpClient) {}

  getShows(showType: string, pageSize: number, pageNumber: number, filterText: string) {
    var url = `${this.url}show/${showType}?pageSize=${pageSize}&pageNumber=${pageNumber}`;

    if (filterText) {
      url += `&filterText=${filterText}`;
    }

    return this.httpClient.get(url).pipe(map((shows: Show[]) => shows));
  }

  getAllShows(showType: string) {
    var url = `${this.url}show/${showType}`;
    return this.httpClient.get(url).pipe(map((shows: Show[]) => shows));
  }

  getShowsWithRatings(showType: string) {
    return this.httpClient.get(`${this.url}show/user-rating/${showType}`).pipe(map((shows: ShowWithRating[]) => shows));
  }

  rateShow(rateShow: RateShow) {
    return this.httpClient.post(`${this.url}rateshow`, JSON.stringify(rateShow)).pipe(map((show: Show) => show));
  }
}
