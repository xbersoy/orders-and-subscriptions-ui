import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from '../models/subscription.model';
const baseUrl = 'http://localhost:8080/api/getCustomerInfo';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  findByPhoneNumber(phoneNumber: any): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${baseUrl}/${phoneNumber}`);
  }
}