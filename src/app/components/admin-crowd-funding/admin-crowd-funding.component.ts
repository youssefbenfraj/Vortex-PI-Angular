import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Compaign } from 'src/app/entities/compaign';
import { CompaignService } from 'src/app/services/compaign.service';
import { CompaignStats } from 'src/app/entities/compaign-stats';

declare var window: any;

@Component({
  selector: 'app-admin-crowd-funding',
  templateUrl: './admin-crowd-funding.component.html',
  styleUrls: ['./admin-crowd-funding.component.css']
})
export class AdminCrowdFundingComponent implements OnInit {

  formModalAdd: any;
  formModalEdit: any;
  formModalPredict: any;
  formModalStats: any;
  compaignDetail !: FormGroup;
  compaignObj : Compaign = new Compaign();
  compaignList : Compaign[] = [];
  consoleValue!: String;
  totalDonations!: string;
  numberOfDonations!: string;
  numberOfDonors!: string;
  avgDonation!: string;
  percentComplete!: string;
  
  constructor(private formBuilder: FormBuilder,
    private compaignservice: CompaignService) { }

  ngOnInit(): void {

    this.getAllCompaigns();
    this.compaignDetail = this.formBuilder.group({
      id_compaign: [''],
      title_compaign: [''],
      desc_compaign: [''],
      target_amount_compaign: [''],
      end_date_compaign: ['']
    })

     
    this.formModalAdd=new  window.bootstrap.Modal(
      document.getElementById('addCompaign')
    );

    this.formModalPredict=new window.bootstrap.Modal(
      document.getElementById('predictReach')
    );
    
    this.formModalStats=new window.bootstrap.Modal(
      document.getElementById('compaignStats')
    );

    this.formModalEdit=new  window.bootstrap.Modal(
      document.getElementById('editCompaign')
    );
   
  }

  CompaignStats(compaign:Compaign){
    this.compaignservice.CompaignStats(compaign.id_compaign).subscribe((res) => {
      const cs = res as unknown as CompaignStats;
      this.totalDonations = cs.totalDonations.toFixed(2);
      this.numberOfDonations = cs.numberOfDonations.toFixed(0);
      this.avgDonation = cs.avgDonation.toFixed(2);
      this.percentComplete = cs.percentComplete.toFixed(2);
      this.numberOfDonors = cs.numberOfDonors.toFixed(0);
      console.log(res);
  })
  }

  predictReach(compaign : Compaign){
    this.compaignservice.CompaignPredict(compaign.id_compaign).subscribe(res=>{
      console.log(res);
      // this.openModalPredict(res[0]);
      const num=res as unknown as number;
      this.consoleValue=num.toFixed(2);
    })
  }

  updateCompaign(){
    this.compaignObj.id_compaign = this.compaignDetail.value.id_compaign;
    this.compaignObj.title_compaign = this.compaignDetail.value.title_compaign;
    this.compaignObj.desc_compaign = this.compaignDetail.value.desc_compaign;
    this.compaignObj.target_amount_compaign = this.compaignDetail.value.target_amount_compaign;
    this.compaignObj.end_date_compaign = this.compaignDetail.value.end_date_compaign;
   
    this.compaignservice.updateCompaing(this.compaignObj).subscribe(res=>{
      console.log(res);
     // this.closeModalEdit();
      this.getAllCompaigns();
      
      alert("campaign successfully edited");
      window.location.href="admin-crowd-funding";
    }, err =>{
      console.log(err);
      alert("Sorry campaign wasn't edited");
      window.location.href="admin-crowd-funding";
    })
  }
 
  editCompaign(compaign : Compaign){
    this.compaignDetail.controls['id_compaign'].setValue(compaign.id_compaign);
    this.compaignDetail.controls['title_compaign'].setValue(compaign.title_compaign);
    this.compaignDetail.controls['desc_compaign'].setValue(compaign.desc_compaign);
    this.compaignDetail.controls['target_amount_compaign'].setValue(compaign.target_amount_compaign);
    this.compaignDetail.controls['end_date_compaign'].setValue(compaign.end_date_compaign);
  }

  deleteCompaign(compaign: Compaign){
    this.compaignservice.deleteCompaign(compaign.id_compaign).subscribe(res=>{
      console.log(res);
     // alert("Learning resource was deleted succesfully");
      this.getAllCompaigns();
    }, err =>{
      console.log(err);
      alert("Sorry unable to delete campaign");
      window.location.href="admin-crowd-funding";
    })
  }
  addCompaign() {
    console.log(this.compaignDetail);
    this.compaignObj.id_compaign = this.compaignDetail.value.id_compaign;
    this.compaignObj.title_compaign = this.compaignDetail.value.title_compaign;
    this.compaignObj.desc_compaign = this.compaignDetail.value.desc_compaign;
    this.compaignObj.target_amount_compaign = this.compaignDetail.value.target_amount_compaign;
    this.compaignObj.end_date_compaign = this.compaignDetail.value.end_date_compaign;

    this.compaignservice.addCompaign(this.compaignObj).subscribe(res=>{
      console.log(res);
      this.getAllCompaigns();
      alert("Campaign was added successfully!");
      window.location.href="admin-crowd-funding";
    },err=>{
      console.log(err);
      alert("Error!");
      window.location.href="admin-crowd-funding";
    });
  }
  getAllCompaigns()
    {
      this.compaignservice.getAllCompaigns().subscribe(res=>{
        this.compaignList = res;
      }, err=>{
        console.log("Error retreiving all campaigns!")
      });
    }
  
  openModal() {
    this.formModalAdd.show();
  }

  openModalPredict(compaign:Compaign){
    if (this.formModalPredict && this.formModalPredict.show) {
      this.formModalPredict.show();   
      this.predictReach(compaign);    
    }  }


    openModalStats(compaign:Compaign){
      if (this.formModalStats && this.formModalStats.show) {
        this.formModalStats.show();   
        this.CompaignStats(compaign);    
      }
    }

  openModalEdit() {
    if (this.formModalEdit && this.formModalEdit.show) {
      this.formModalEdit.show();
    }
  }

}


