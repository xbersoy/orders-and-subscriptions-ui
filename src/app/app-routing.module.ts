import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';

const routes: Routes = [
  { path: 'subscription', component: SubscriptionListComponent },
  { path: 'order', component: OrderListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
