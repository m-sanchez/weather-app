import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleDayComponent} from './single-day.component';
import {TempConverterPipe} from '../../pipes/temp-converter/temp-converter.pipe';
import {RouterTestingModule} from '@angular/router/testing';
import {Forecast5Service} from '../../services/forecast/forecast5.service';
import {HttpClientModule} from '@angular/common/http';

describe('SingleDayComponent', () => {
  let component: SingleDayComponent;
  let fixture: ComponentFixture<SingleDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [SingleDayComponent, TempConverterPipe],
      providers: [Forecast5Service]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
