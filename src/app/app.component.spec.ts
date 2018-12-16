import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {SingleDayComponent} from './components/single-day/single-day.component';
import {SingleDaySummaryComponent} from './components/single-day-summary/single-day-summary.component';
import {HomeComponent} from './components/home/home.component';
import {TempConverterPipe} from './pipes/temp-converter/temp-converter.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {Forecast5Service} from './services/forecast/forecast5.service';
import {AlertService} from './services/alert/alert.service';
import {Component} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AlertComponent} from './components/alert/alert.component';

// @Component({
//   selector: 'weather-navbar',
//   template: ''
// })
// class MockNavComponent {
// }
//
// @Component({
//   selector: 'weather-alert',
//   template: ''
// })
// class MockAlertComponent {
// }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        SingleDayComponent,
        SingleDaySummaryComponent,
        NavbarComponent,
        HomeComponent,
        TempConverterPipe,
        AlertComponent
      ],
      providers: [Forecast5Service, AlertService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'weatherMap'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('weatherMap');
  // });
  //
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to weatherMap!');
  // });
});


