import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/models/subscription.model';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {

  subscriptions?: Subscription[];
  currentSubscription: Subscription = {};
  currentIndex = -1;
  phoneNumber = '';
  clearButtonVisible = false
  noDataVisible = true;
  
  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
  }

  refreshList(): void {
    this.currentSubscription = {};
    this.currentIndex = -1;
    this.clearButtonVisible = false;
    this.subscriptions= [];
    this.phoneNumber = '';
    this.noDataVisible = true;
  }

  setActiveSubscription(subscription: Subscription, index: number): void {
    this.currentSubscription = subscription;
    this.currentIndex = index;
  }

  findByPhoneNumber(): void {
    this.currentSubscription = {};
    this.currentIndex = -1;
    this.clearButtonVisible = true;

    this.subscriptionService.findByPhoneNumber(this.phoneNumber)
      .subscribe(
        data => {
          this.noDataVisible = false;
          this.subscriptions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}