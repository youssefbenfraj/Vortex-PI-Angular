import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CrowdFundingComponent } from './components/crowd-funding/crowd-funding.component';
import { DonationComponent } from './components/donation/donation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminCrowdFundingComponent } from './components/admin-crowd-funding/admin-crowd-funding.component';
import { AdminDonationComponent } from './components/admin-donation/admin-donation.component';
import { AdvertisementDirective } from './components/advertisement.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CrowdFundingComponent,
    DonationComponent,
    AdminCrowdFundingComponent,
    AdminDonationComponent,
    AdvertisementDirective
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
