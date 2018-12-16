import {Component, OnDestroy, OnInit} from '@angular/core';
import {Forecast5Service} from '../../services/forecast/forecast5.service';
import {IDay} from '../../interfaces/IDay';
import {ActivatedRoute} from '@angular/router';
import {ICity} from '../../interfaces/ICity';
import {Location} from '@angular/common';
import {AlertService} from '../../services/alert/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  days: IDay[];
  city: string;
  subscriptions: Subscription[] = [];

  constructor(private router: ActivatedRoute,
              private forecastService: Forecast5Service,
              private location: Location,
              private alertService: AlertService) {
  }

  ngOnInit() {
    const foreCastSubs = this.forecastService.foreCastSubscription().subscribe((res) => {
      this.days = res;
    });
    const paramsSubs = this.router.params.subscribe(params => {
      this.city = params['city'];
      if (this.city) {
        this.alertService.info('Loading weather for ' + this.city + '. Please wait...');
        this.forecastService.searchByName(this.city);
      } else if (navigator.geolocation) {
        this.alertService.info('Loading weather for your location. Please wait...');
        navigator.geolocation.getCurrentPosition((position) => {
          this.forecastService.getByCoordinates(position.coords);
        });
      } else {
        this.alertService.error('Geolocation is not supported by this browser.');
      }
    });
    const citySubs = this.forecastService.citySubscription().subscribe((city: ICity) => {
      const newCity = city ? city.name + ',' + city.country : '';
      if (this.city !== newCity) {
        this.city = newCity;
        this.location.go('/home/' + this.city);
      }
    });
    this.subscriptions = [foreCastSubs, paramsSubs, citySubs];
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(subs => {
        subs.unsubscribe();
      });
    }
  }
}
