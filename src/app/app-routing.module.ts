import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdoptionCenterComponent } from './components/adoption-center/adoption-center.component';
import { AnimalProfileComponent } from './components/animal-profile/animal-profile.component';
import { AdoptionPostComponent } from './components/adoption-post/adoption-post.component';
import { compileClassMetadata } from '@angular/compiler';
import { AddAdoptionpostComponent } from './components/add-adoptionpost/add-adoptionpost.component';
import { AdoptionApplication } from './entities/adoption-application';
import { AdoptionApplicationComponent } from './components/adoption-application/adoption-application.component';
import { CheckAdoptionapplicationComponent } from './components/check-adoptionapplication/check-adoptionapplication.component';
import { ShowAdoptionapplicationsComponent } from './components/show-adoptionapplications/show-adoptionapplications.component';
import { AdminAdoptionCenterComponent } from './components/admin-adoption-center/admin-adoption-center.component';

const routes: Routes = [
  
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path:'adoptioncenter',
    component: AdoptionCenterComponent
  },
  {
    path:'animalprofile',
    component: AnimalProfileComponent
  },
  {
    path:'adoptionpost',
    component: AdoptionPostComponent
  },
  {
    path:'addadoptionpost/:idanim',
    component: AddAdoptionpostComponent
  },
  {
    path:'adoptionapplication/:idpost',
    component: AdoptionApplicationComponent
  },
  {
    path:'checkapplication/:idpost',
    component: CheckAdoptionapplicationComponent
  },
  {
    path:'showapplications',
    component: ShowAdoptionapplicationsComponent
  },
  {
    path:'adminadoption',
    component: AdminAdoptionCenterComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
