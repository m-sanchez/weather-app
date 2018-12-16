import {TestBed} from '@angular/core/testing';
import {Forecast5Service} from './forecast5.service';
import {SingleDayComponent} from '../../components/single-day/single-day.component';
import {TempConverterPipe} from '../../pipes/temp-converter/temp-converter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from '../../components/home/home.component';
import {AlertComponent} from '../../components/alert/alert.component';
import {SingleDaySummaryComponent} from '../../components/single-day-summary/single-day-summary.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('Forecast5Service', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [NavbarComponent, HomeComponent, AlertComponent, SingleDaySummaryComponent, TempConverterPipe, SingleDayComponent],
    imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule],
    providers: [Forecast5Service]
  }));
  const foreCast = [
    {
      'dt': 1545264000,
      'main': {
        'temp': 279.081,
        'temp_min': 279.081,
        'temp_max': 279.081,
        'pressure': 1015.45,
        'sea_level': 1023.14,
        'grnd_level': 1015.45,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 8},
      'wind': {'speed': 2.3, 'deg': 210.002},
      'rain': {'3h': 1.08},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-12-20 00:00:00'
    }, {
      'dt': 1545274800,
      'main': {
        'temp': 277.87,
        'temp_min': 277.87,
        'temp_max': 277.87,
        'pressure': 1015.52,
        'sea_level': 1023.36,
        'grnd_level': 1015.52,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 32},
      'wind': {'speed': 3.01, 'deg': 226},
      'rain': {'3h': 0.02},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-12-20 03:00:00'
    }, {
      'dt': 1545285600,
      'main': {
        'temp': 278.565,
        'temp_min': 278.565,
        'temp_max': 278.565,
        'pressure': 1015.54,
        'sea_level': 1023.23,
        'grnd_level': 1015.54,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 44},
      'wind': {'speed': 3.42, 'deg': 228.001},
      'rain': {'3h': 0.14},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-12-20 06:00:00'
    }, {
      'dt': 1545296400,
      'main': {
        'temp': 279.054,
        'temp_min': 279.054,
        'temp_max': 279.054,
        'pressure': 1015.58,
        'sea_level': 1023.22,
        'grnd_level': 1015.58,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 68},
      'wind': {'speed': 3.82, 'deg': 224.001},
      'rain': {'3h': 0.040000000000001},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-12-20 09:00:00'
    }, {
      'dt': 1545307200,
      'main': {
        'temp': 281.114,
        'temp_min': 281.114,
        'temp_max': 281.114,
        'pressure': 1015.14,
        'sea_level': 1022.84,
        'grnd_level': 1015.14,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 4.57, 'deg': 238.501},
      'rain': {'3h': 1.52},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-12-20 12:00:00'
    }, {
      'dt': 1545318000,
      'main': {
        'temp': 281.128,
        'temp_min': 281.128,
        'temp_max': 281.128,
        'pressure': 1015.54,
        'sea_level': 1023.23,
        'grnd_level': 1015.54,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 88},
      'wind': {'speed': 5.1, 'deg': 258.002},
      'rain': {'3h': 0.14},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-12-20 15:00:00'
    }, {
      'dt': 1545328800,
      'main': {
        'temp': 280.305,
        'temp_min': 280.305,
        'temp_max': 280.305,
        'pressure': 1016.84,
        'sea_level': 1024.52,
        'grnd_level': 1016.84,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 32},
      'wind': {'speed': 4.4, 'deg': 264.5},
      'rain': {'3h': 0.029999999999999},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-12-20 18:00:00'
    }, {
      'dt': 1545339600,
      'main': {
        'temp': 278.739,
        'temp_min': 278.739,
        'temp_max': 278.739,
        'pressure': 1017.54,
        'sea_level': 1025.31,
        'grnd_level': 1017.54,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n'}],
      'clouds': {'all': 20},
      'wind': {'speed': 3.85, 'deg': 243},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-12-20 21:00:00'
    }];
  it('should be created', () => {
    const service: Forecast5Service = TestBed.get(Forecast5Service);
    expect(service).toBeTruthy();
  });
  it('Expects to get correct max and min temperature', () => {
    const service = TestBed.get(Forecast5Service);
    const minMax = service.getHighLowTemp(foreCast);
    expect(minMax[0] === 277.87 && minMax[1] === 281.128).toBeTruthy();
  });
  it('Expects to get correct average humidity', () => {
    const service = TestBed.get(Forecast5Service);
    const average = service.getAveHumidity(foreCast);
    expect(average === 99).toBeTruthy();
  });
  it('Expects to get most common weather for the day', () => {
    const service = TestBed.get(Forecast5Service);
    const main = service.getWeatherMain(foreCast);
    expect(main[0] === 'Rain' && main[1] === '500').toBeTruthy();
  });

});
