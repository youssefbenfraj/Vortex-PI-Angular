import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compaign } from 'src/app/entities/compaign';
import { CompaignService } from 'src/app/services/compaign.service';

@Component({
  selector: 'app-crowd-funding',
  templateUrl: './crowd-funding.component.html',
  styleUrls: ['./crowd-funding.component.css']
})
export class CrowdFundingComponent implements OnInit {

  CompaignList : Compaign[] = [];
  totalValues : number[]=[];
  nmbComp!: number;
  j!:number;
  constructor( private router:Router,
    private compaignService:CompaignService) { }

  ngOnInit(): void {
    this.getAllCompaigns(); 
   
  }
  showDonation(id_comp:number){
    this.router.navigate(['donation',id_comp]);
  }

  getAllCompaigns()
  {
    this.compaignService.getAllCompaigns().subscribe(res=>{
      this.CompaignList = res;
      this.nmbComp=this.CompaignList.length;
      this.j=0;
      for (let i = res[0].id_compaign; i < res[this.nmbComp-1].id_compaign+1; i++) {
        this.CompaignStatistics(i,this.j);
        this.j=this.j+1;
      }
    });
  }
  CompaignStatistics(id: number,j:number) {
    this.compaignService.CompaignStats(id).subscribe((data: any) => {
      this.totalValues[j] = data['percentComplete'];
    });
  }
}
