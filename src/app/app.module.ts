import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdoptionCenterComponent } from './components/adoption-center/adoption-center.component';
import { AnimalProfileComponent } from './components/animal-profile/animal-profile.component';
import { AdoptionPostComponent } from './components/adoption-post/adoption-post.component';
import { AddAdoptionpostComponent } from './components/add-adoptionpost/add-adoptionpost.component';
import { AdoptionApplicationComponent } from './components/adoption-application/adoption-application.component';
import { ShowAdoptionapplicationsComponent } from './components/show-adoptionapplications/show-adoptionapplications.component';
import { CheckAdoptionapplicationComponent } from './components/check-adoptionapplication/check-adoptionapplication.component';
import { AdminAdoptionCenterComponent } from './components/admin-adoption-center/admin-adoption-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdoptionCenterComponent,
    AnimalProfileComponent,
    AdoptionPostComponent,
    AddAdoptionpostComponent,
    AdoptionApplicationComponent,
    ShowAdoptionapplicationsComponent,
    CheckAdoptionapplicationComponent,
    AdminAdoptionCenterComponent,
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
