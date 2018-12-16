import {Injectable} from '@angular/core';
import {IDay} from '../../interfaces/IDay';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ICity} from '../../interfaces/ICity';
import {BehaviorSubject} from 'rxjs';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class Forecast5Service {
  // Subjects
  private citySubject: BehaviorSubject<ICity> = new BehaviorSubject<ICity>(null);
  private foreCastSubject: BehaviorSubject<IDay[]> = new BehaviorSubject<IDay[]>(null);

  constructor(private http: HttpClient, private  alertService: AlertService) {
  }


  // Subscriptions
  citySubscription() {
    return this.citySubject.asObservable();
  }

  foreCastSubscription() {
    return this.foreCastSubject.asObservable();
  }


  errorHandler(res) {
    this.alertService.error(res.error.message);
    this.foreCastSubject.next(null);
    this.citySubject.next(null);
  }

  mapFunction(res) {
    if (res && res.city && res.list) {
      this.alertService.clear();
      this.citySubject.next(res.city);
      return this.separateForecastByDay(res.list).map((elem) => {
        return this.consolidateToDailyForecast(elem);
      });
    }

  }

  // Forecast search
  searchByName(cityName: string) {
    this.foreCastSubject.next(null);
    this.http.get<any>(`${environment.apiHost}&q=${cityName}`).pipe(map(res => {
      return this.mapFunction(res);
    })).subscribe(res => {
      this.foreCastSubject.next(res);
    }, (res) => {
      this.errorHandler(res);
    });
  }

  getByCoordinates(coords: Coordinates) {
    this.foreCastSubject.next(null);
    this.http.get<any>(`${environment.apiHost}&lat=${coords.latitude}&lon=${coords.longitude}`).pipe(map(res => {
      return this.mapFunction(res);
    })).subscribe(res => {
      this.foreCastSubject.next(res);
    }, (res) => {
      this.errorHandler(res);
    });
  }

  // Get details of a single day, will get the cached data if coming from the home view
  getDetails(city: string, dayNumber: number) {
    if (!this.foreCastSubject.value ||
      !this.citySubject.value ||
      city !== this.citySubject.value.name + ',' + this.citySubject.value.country) {
      this.searchByName(city);
    }
    return this.foreCastSubject.asObservable().pipe(map((res) => {

      return res ? res[dayNumber].detailed : null;
    }));
  }

  // separate 5 day 3-hourly forecast into daily 3-hourly forecasts
  separateForecastByDay(forecast) {
    const separatedForecast = new Array(5);
    for (let i = 0; i < separatedForecast.length; i++) {
      separatedForecast[i] = {'date': null, 'forecast': []};
    }
    let [dayIdx, prevForecastElDate] = [0, null];
    const today = new Date();
    for (let j = 0; j < forecast.length; j++) {
      const forecastEl = forecast[j];

      // .replace(/-/g, '/') added to resolve ES5 vs ISO-8601 specification gaps
      const date = new Date(`${forecastEl.dt_txt.replace(/-/g, '/')}`);

      // skip if forecast el matches today's date
      if (date.getDate() === today.getDate()) {
        continue;
      }

      // increment dayIdx if prev forecast date does not match current forecast date
      if (prevForecastElDate) {
        dayIdx += prevForecastElDate.getDate() !== date.getDate() ? 1 : 0;
      }

      // break loop if going over 5 days of forecast
      if (dayIdx > 4) {
        break;
      }

      // set date attribute if it doesn't exist
      if (!separatedForecast[dayIdx].date) {
        separatedForecast[dayIdx].date = date;
      }

      // dayIdx represents the day from which the forecast el comes from
      separatedForecast[dayIdx].forecast.push(forecastEl);

      prevForecastElDate = date;
    }

    // check if last element of separatedForecast has forecast data elements.  If no, remove it.
    if (separatedForecast.slice(-1)[0].forecast.length === 0) {
      separatedForecast.splice(-1);
    }
    return separatedForecast;
  }

// consolidates a day's 3-hourly forecast into a single consolidated forecast

  consolidateToDailyForecast(forecastEl) {
    const weatherMain = this.getWeatherMain(forecastEl.forecast);
    const main = weatherMain[0];
    const icon = weatherMain[1];
    const humidity = this.getAveHumidity(forecastEl.forecast);
    const [low, high] = this.getHighLowTemp(forecastEl.forecast);
    const ave = Math.round((((high + low) / 2) * 100) / 100);

    return {
      date: forecastEl.date,
      main,
      humidity,
      low,
      high,
      ave,
      icon,
      detailed: forecastEl,
    };
  }


  getWeatherMain(forecast) {

    const mainTracker = {};
    const iconTracker = {};
    forecast.forEach((forecastEl) => {
      const main = forecastEl.weather[0].main;
      const icon = forecastEl.weather[0].id;
      mainTracker[`${main}`] = mainTracker[`${main}`] ? mainTracker[`${main}`] + 1 : 1;
      iconTracker[`${icon}`] = iconTracker[`${icon}`] ? iconTracker[`${icon}`] + 1 : 1;
    });

    const mainSorted = Object.keys(mainTracker).sort((a, b) => {
      return mainTracker[b] - mainTracker[a];
    });

    const iconSorted = Object.keys(iconTracker).sort((a, b) => {
      return iconTracker[b] - iconTracker[a];
    });
    return [mainSorted[0], iconSorted[0]];
  }

  getHighLowTemp(forecast) {
    let minTemp, maxTemp;

    forecast.forEach((forecastEl, idx) => {
      const temp = forecastEl.main.temp;

      if (idx === 0) {
        [minTemp, maxTemp] = [temp, temp];
      } else if (temp < minTemp) {
        minTemp = temp;
      } else if (temp > maxTemp) {
        maxTemp = temp;
      }
    });
    return [minTemp, maxTemp];
  }


  getAveHumidity(forecast) {

    return Math.round(
      forecast.reduce(((acc, curr) => acc + curr.main.humidity), 0) /
      forecast.length);
  }
}
