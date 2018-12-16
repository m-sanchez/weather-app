import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'weather-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  hideAlert() {
    this.message = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
