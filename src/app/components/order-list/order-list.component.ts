import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders?: Order[];
  currentOrder: Order = {};
  currentIndex = -1;
  subscriptionId = '';
  clearButtonVisible = false
  noDataVisible = true;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  

  refreshList(): void {
    this.currentOrder = {};
    this.currentIndex = -1;
    this.clearButtonVisible = false;
    this.orders= [];
    this.subscriptionId = '';
    this.noDataVisible = true;
  }

  setActiveOrder(order: Order, index: number): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }

  searchBySubscriptionId(): void {
    this.currentOrder = {};
    this.currentIndex = -1;
    this.clearButtonVisible = true;

    this.orderService.findBySubscriptionId(this.subscriptionId)
      .subscribe(
        data => {
          this.noDataVisible = false;
          this.orders = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}


