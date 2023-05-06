import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CrowdFundingComponent } from './components/crowd-funding/crowd-funding.component';
import { DonationComponent } from './components/donation/donation.component';
import { AdminCrowdFundingComponent } from './components/admin-crowd-funding/admin-crowd-funding.component';
import { AdminDonationComponent } from './components/admin-donation/admin-donation.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'crowd-funding',
    component: CrowdFundingComponent
  },
  {
    path: 'donation/:idcomp',
    component: DonationComponent
  },
  {
    path: 'admin-crowd-funding',
    component: AdminCrowdFundingComponent
  },
  {
    path: 'admin-donation',
    component: AdminDonationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
