import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { CountUpModule } from 'ngx-countup';
import { ApiService } from './api/api.service';

import { AppComponent } from './app.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    CountUpModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
