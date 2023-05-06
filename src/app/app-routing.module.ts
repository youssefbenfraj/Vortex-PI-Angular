import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

import { LearningResourceComponent } from './components/learning-resource/learning-resource.component';
import { AdminLearningResourceComponent } from './components/admin-learning-resource/admin-learning-resource.component';
import { AllLearningResourcesComponent } from './components/all-learning-resources/all-learning-resources.component';
import { ChatbotAiComponent } from './components/chatbot-ai/chatbot-ai.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

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
    },
      {
    path:'learning-resource/:id',
    component: LearningResourceComponent,
  },
  {
    path:'admin-learning-resource',
    component: AdminLearningResourceComponent
  },
  {
    path:'all-learning-resources',
    component: AllLearningResourcesComponent
  },
  {
    path:'pet-bot',
    component: ChatbotAiComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
