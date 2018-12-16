import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SingleDayComponent} from './components/single-day/single-day.component';
import {SingleDaySummaryComponent} from './components/single-day-summary/single-day-summary.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {Forecast5Service} from './services/forecast/forecast5.service';
import {HttpClientModule} from '@angular/common/http';
import {TempConverterPipe} from './pipes/temp-converter/temp-converter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './services/alert/alert.service';
import {AlertComponent} from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleDayComponent,
    SingleDaySummaryComponent,
    NavbarComponent,
    HomeComponent,
    TempConverterPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [Forecast5Service, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
