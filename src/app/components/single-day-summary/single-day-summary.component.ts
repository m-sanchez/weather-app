import {Component, Input, OnInit} from '@angular/core';
import {IDay} from '../../interfaces/IDay';

@Component({
  selector: 'weather-single-day-summary',
  templateUrl: './single-day-summary.component.html',
  styleUrls: ['./single-day-summary.component.scss']
})
export class SingleDaySummaryComponent implements OnInit {
  @Input() day: IDay;
  @Input() dayNumber: number;
  @Input() city: string;

  constructor() {
  }

  ngOnInit() {
  }

}
