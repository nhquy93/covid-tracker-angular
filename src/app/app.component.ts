import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { ApiService } from './api/api.service';
import { GlobalModel } from './model/global.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  global: boolean = false;
  country: string = '';
  data: GlobalModel;
  dailyData: any[] = [];
  countries: any[] = [];
  lineChartData: any[] = [{
    data: [65, 64, 33, 44], label: 'Temp label'
  }];
  lineChartType: ChartType = "line";
  lineChartLabels: any[] = ['Label01', 'Label02', 'Label03'];
  barChartType: ChartType = 'bar';
  barChartLabels: any[] = ['Infected', 'Recovered', 'Deaths'];
  barChartData: any[] = [{
    data: [65, 76, 33], label: 'Label'
  }];


  constructor(
    private api: ApiService
  ) {
    this.data = new GlobalModel();
  }

  ngOnInit() {
    this.global = true;
    this.fetchData();
    this.fetchCountries();
    this.fetchDailyData();
  }

  fetchData() {
    this.api.fetchData().subscribe((res: any) => {
      this.data.confirmed = res['confirmed']['value'];
      this.data.recovered = res['recovered']['value'];
      this.data.deaths = res['deaths']['value'];
      this.data.lastupdate = res['lastUpdate'];
    })
  }

  fetchCountries() {
    this.api.fetchCountries().subscribe((res: any) => {
      let countries = res['countries'];
      this.countries = countries.map((name: any) => name['name']);
    })
  }

  fetchDataByCountry(country: string) {
    this.api.fetchDataByCountry(country).subscribe((res: any) => {
      this.data.confirmed = res['confirmed']['value'];
      this.data.recovered = res['recovered']['value'];
      this.data.deaths = res['deaths']['value'];
      this.data.lastupdate = res['lastUpdate'];

      this.barChartData = [
        {
          data: [this.data.confirmed, this.data.recovered, this.data.deaths],
          label: 'People'
        }
      ]
    })
  }

  fetchDailyData() {
    this.api.fetchDailyData().subscribe((res: any) => {
        this.lineChartLabels = res.map((date: any) => date['reportDate']);
        let infected = res.map((confirmed: any) => confirmed['totalConfirmed']);
        let deaths = res.map((deaths: any) => deaths['deaths']['total']);
        let recovered = res.map((rec: any) => rec);
  
        this.lineChartData = [
          {
            data: infected,
            label: 'Infected'
          },
          {
            data: deaths,
            label: 'Deaths'
          }
        ];
      })
  }

  onCountryChanged(e: any) {
    this.country = e;
    if(e == 'global') {
      this.fetchData();
      this.global = true;
    } else {
      this.fetchDataByCountry(e);
      this.global = false;
    }
  }

  ngOnDestroy() {}
}
