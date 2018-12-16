import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertComponent} from '../alert/alert.component';
import {SingleDaySummaryComponent} from '../single-day-summary/single-day-summary.component';
import {TempConverterPipe} from '../../pipes/temp-converter/temp-converter.pipe';
import {RouterTestingModule} from '@angular/router/testing';
import {Forecast5Service} from '../../services/forecast/forecast5.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from '../home/home.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, AlertComponent, SingleDaySummaryComponent, TempConverterPipe],
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule],
      providers: [Forecast5Service]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
