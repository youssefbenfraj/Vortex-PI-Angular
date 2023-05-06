import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { error } from 'console';
import { Compaign } from 'src/app/entities/compaign';
import { Donation } from 'src/app/entities/donation';
import { DonationService } from 'src/app/services/donation.service';
import { ActivatedRoute, Router } from '@angular/router';


declare var window: any;

@Component({
    selector: 'app-donation',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit{

  formModalAdd: any;
  formModalEdit: any;
  donationDetails !: FormGroup;
  donationObj : Donation = new Donation();
  donationList : Donation[] = [];
  id !: number ;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private donationService :DonationService) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
       this.id = params['idcomp'];
    });

    this.donationService.getAllDonations();

    this.donationDetails=this.formBuilder.group({
      name:[''],
      email:[''],
      desc_donation:[''],
      amount_donation:['']
    });

  }
   addDonationAssign() {
      console.log(this.donationDetails);
      this.donationObj.amount_donation = this.donationDetails.value.amount_donation;
      this.donationObj.desc_donation = this.donationDetails.value.desc_donation;
    
      this.donationService.addDonationAssign(this.donationObj,this.id,2).subscribe(res=>{
        console.log(res);
        alert("Donation Added succefully");
        window.location.href="crowd-funding";
      });
    }
}


