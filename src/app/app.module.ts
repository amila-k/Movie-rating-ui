import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShowListComponent } from './search-show/show-list/show-list.component';
import { RateShowComponent } from './rate-show/rate-show.component';
import { SearchShowComponent } from './search-show/search-show.component';
import { ShowListRateComponent } from './rate-show/show-list-rate/show-list-rate.component';
import { RatingModule } from 'ng-starrating';
import { ShowTabsComponent } from './show-tabs/show-tabs.component';
import { interceptorProvider } from './core/http-inderceptor.provider';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    RateShowComponent,
    SearchShowComponent,
    ShowListRateComponent,
    ShowTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    RatingModule 
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
