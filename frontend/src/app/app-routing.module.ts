import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MonthViewerComponent } from './components/month-viewer/month-viewer.component';
import { AddCategoryOrPaymentMethodComponent } from './components/add-category-or-payment-method/add-category-or-payment-method.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaction/:id', component: MonthViewerComponent },
  { path: 'add-cat-payment', component: AddCategoryOrPaymentMethodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
