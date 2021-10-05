import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalModel } from 'src/app/model/global.model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() countries: any[] = [];
  @Input() data: GlobalModel = new GlobalModel();
  @Output() country: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  countryChanged(e: any) {
    if (!e) return;
    this.country.emit(e);
  }

}
