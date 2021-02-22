import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ShowType } from "./models/show-type.enum";
import { RateShowComponent } from "./rate-show/rate-show.component";
import { SearchShowComponent } from "./search-show/search-show.component";

const routes: Routes = [
  {
    path: "search-shows",
    redirectTo: `search-shows/${ShowType.movie}`
  },
  {
    path: "search-shows",
    component: SearchShowComponent,
    children: [
      {
        path: ShowType.movie,
        component: SearchShowComponent,
      },
      {
        path: ShowType.tvshow,
        component: SearchShowComponent,
      },
    ],
  },
  {
    path: "rate-shows",
    redirectTo: `rate-shows/${ShowType.movie}`
  },
  {
    path: "rate-shows",
    component: RateShowComponent,
    children: [
      {
        path: ShowType.movie,
        component: RateShowComponent,
      },
      {
        path: ShowType.tvshow,
        component: RateShowComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
