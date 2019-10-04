import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetResumeComponent } from './components/budget-resume/budget-resume.component';
import { SideSelectorComponent } from './components/side-selector/side-selector.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MonthViewerComponent } from './components/month-viewer/month-viewer.component';
import { AddCategoryOrPaymentMethodComponent } from './components/add-category-or-payment-method/add-category-or-payment-method.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BudgetResumeComponent,
    SideSelectorComponent,
    DashboardComponent,
    MonthViewerComponent,
    AddCategoryOrPaymentMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
