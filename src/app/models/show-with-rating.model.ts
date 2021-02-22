import { RateShow } from "./rate-show.model";
import { Show } from "./show.model";

export class ShowWithRating extends Show {
  userRating: RateShow;
}
