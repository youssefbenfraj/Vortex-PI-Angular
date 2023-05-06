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
import { ChatbotAiComponent } from './components/chatbot-ai/chatbot-ai.component';
import { NbChatModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationLRComponent } from './components/notification-lr/notification-lr.component';
import { ToastrModule } from 'ngx-toastr';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';



Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LearningResourceComponent,
    AdminLearningResourceComponent,
    AllLearningResourcesComponent,
    ChatbotAiComponent,
    NotificationLRComponent,
    NavBarComponent,
    FooterComponent,
    ContactUsComponent
    
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  ,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbChatModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
