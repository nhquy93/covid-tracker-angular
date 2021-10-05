import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() global: boolean = true;
  @Input() lineChartData: any[] = [];
  @Input() lineChartType: ChartType = "line";
  @Input() lineChartLabels: any[] = [];
  @Input() barChartType: ChartType = 'bar';
  @Input() barChartLabels: any[] = [];
  @Input()  barChartData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
