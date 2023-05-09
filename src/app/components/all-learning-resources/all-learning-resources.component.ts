import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearningResource } from 'src/app/entities/learning-resource';
import { LearningResourceService } from 'src/app/services/learning-resource.service';

@Component({
  selector: 'app-all-learning-resources',
  templateUrl: './all-learning-resources.component.html',
  styleUrls: ['./all-learning-resources.component.css']
})
export class AllLearningResourcesComponent implements OnInit {


  lrsList : LearningResource[] = [];
  
  constructor(
    private router: Router,
    
    private lrservice: LearningResourceService
  ) { }

  ngOnInit(): void {
    this.getAllLR();
  }

  getAllLR()
  {
    this.lrservice.getAllLR().subscribe(res=>{
      this.lrsList = res;
    }, err=>{
      console.log("Error retreiving all learning resources!")
    });
  }

  gotoLR(lr: LearningResource) {
    this.router.navigate(['/learning-resource', lr.id_learningr]);
  }

  gotoChatbot(){
    this.router.navigate(['/pet-bot']);
  }


}
