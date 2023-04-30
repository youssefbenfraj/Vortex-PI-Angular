import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LearningResourceComponent } from './components/learning-resource/learning-resource.component';
import { AdminLearningResourceComponent } from './components/admin-learning-resource/admin-learning-resource.component';
import { AllLearningResourcesComponent } from './components/all-learning-resources/all-learning-resources.component';

const routes: Routes = [

  {
    path:'home',
    component: HomePageComponent,
  },
  {
    path:'',
    component: HomePageComponent,
  },
  {
    path:'learning-resource',
    component: LearningResourceComponent,
  },
  {
    path:'admin-learning-resource',
    component: AdminLearningResourceComponent
  },
  {
    path:'all-learning-resources',
    component: AllLearningResourcesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
