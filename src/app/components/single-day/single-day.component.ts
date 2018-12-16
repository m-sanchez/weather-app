import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Forecast5Service} from '../../services/forecast/forecast5.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'weather-single-day',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.scss']
})
export class SingleDayComponent implements OnInit, OnDestroy {
  detailedDay: any;
  subscriptions: Subscription[] = [];

  constructor(private router: ActivatedRoute, private forecastService: Forecast5Service) {
  }

  ngOnInit() {

    this.subscriptions.push(this.router.params.subscribe(params => {
      this.subscriptions.push(this.forecastService.getDetails(params['city'], params['dayNumber']).subscribe((res) => {
        this.detailedDay = res;
      }));
    }));
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(subs => {
        subs.unsubscribe();
      });
    }
  }
}
