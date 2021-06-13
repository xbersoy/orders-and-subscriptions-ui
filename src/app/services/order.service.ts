import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
const baseUrl = 'http://localhost:8080/api/getSubscriptionOrders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  findBySubscriptionId(subscriptionId: any): Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/${subscriptionId}`);
  }
}