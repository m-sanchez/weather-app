import {Component, OnDestroy, OnInit} from '@angular/core';
import {Forecast5Service} from '../../services/forecast/forecast5.service';
import {ICity} from '../../interfaces/ICity';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'weather-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
  city: string;
  subs: Subscription;
  searchForm = this.formBuilder.group({
    citySearch: ['', Validators.required]
  });

  constructor(private forecastService: Forecast5Service, private router: Router, private formBuilder: FormBuilder) {
  }


  newSearch() {
    this.router.navigate(['/home/' + this.searchForm.get('citySearch').value]);
  }

  ngOnInit() {
    this.subs = this.forecastService.citySubscription().subscribe((city: ICity) => {
      this.city = city ? city.name + ' (' + city.country + ')' : '';
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
