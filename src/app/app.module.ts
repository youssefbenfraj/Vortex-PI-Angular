import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LearningResourceComponent } from './components/learning-resource/learning-resource.component';
import { AdminLearningResourceComponent } from './components/admin-learning-resource/admin-learning-resource.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { AllLearningResourcesComponent } from './components/all-learning-resources/all-learning-resources.component';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LearningResourceComponent,
    AdminLearningResourceComponent,
    AllLearningResourcesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
