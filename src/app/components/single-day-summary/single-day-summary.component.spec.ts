import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {SingleDaySummaryComponent} from './single-day-summary.component';
import {TempConverterPipe} from '../../pipes/temp-converter/temp-converter.pipe';

describe('SingleDaySummaryComponent', () => {
  let component: SingleDaySummaryComponent;
  let fixture: ComponentFixture<SingleDaySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SingleDaySummaryComponent, TempConverterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDaySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
