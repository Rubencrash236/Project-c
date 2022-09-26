import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ***** Components *****
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineChartComponent } from './components/dashboard/charts/line-chart/line-chart.component';
import { BarChartComponent } from './components/dashboard/charts/bar-chart/bar-chart.component';
import { ListTraysComponent } from './components/list-trays/list-trays.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterProjectComponent } from './components/register-project/register-project.component';
// ***** End Components *****

// ***** Material imports *****
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
// ***** End Material Imports *****

// ***** Charts imports *****
import { NgChartsModule } from 'ng2-charts';

// ***** End Charts imports *****

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent,
    BarChartComponent,
    ListTraysComponent,
    LoginComponent,
    RegisterProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // ***** Material imports *****
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    // ***** End Material Imports *****

    // ***** Charts imports *****
    NgChartsModule,
    // ***** End Charts imports *****

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
