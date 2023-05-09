import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdoptionPost } from 'src/app/entities/adoption-post';
import { AdoptionPostService } from 'src/app/_services/adoption-post.service';

declare var window: any;

@Component({
  selector: 'app-adoption-center',
  templateUrl: './adoption-center.component.html',
  styleUrls: ['./adoption-center.component.css']
})
export class AdoptionCenterComponent implements OnInit {

  adpList : AdoptionPost[] = [];
  
  constructor(
    private router: Router,
    private adpservice: AdoptionPostService,
  ) { }


  
  ngOnInit(): void {

    this.getAllADP();
  }
  getAllADP()
    { 
      
      this.adpservice.getAllADP().subscribe(res=>{
        this.adpList = res;
      }, err=>{
        console.log("Error retreiving all Adoption Profiles!")
      });
    }

  showapplications(id_post:number){
    this.router.navigate(['adoptionapplication',id_post])
  }
  
  navigator(id_post:number){
    this.router.navigate(['checkapplication',id_post])
  }

}
