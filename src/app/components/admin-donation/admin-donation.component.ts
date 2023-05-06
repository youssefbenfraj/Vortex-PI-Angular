import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/entities/donation';
import { DonationService } from 'src/app/services/donation.service';
import { Chart} from 'chart.js/auto';

@Component({
  selector: 'app-admin-donation',
  templateUrl: './admin-donation.component.html',
  styleUrls: ['./admin-donation.component.css']
})


export class AdminDonationComponent implements OnInit {
  donationList : Donation[] = [];

  constructor(private donationservice:DonationService) { }

  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];

  chartDataTheme : number[] = [];
  chartDatalabelsTheme : any[] = [];

  ngOnInit(): void {
    this.getAllDonations();


    this.donationservice.getDonationsByCompaign().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.chartData.push(data[i].data);
        this.chartDatalabels.push(data[i].label);
      }
    
     // initialize chart
  this.ctx = document.getElementById('myChart');
  this.config = {
    type: 'pie',
    options: {},
    data: {
      labels: this.chartDatalabels,
      datasets: [
        {
          label: 'Chart Data',
          data: this.chartData,
          borderWidth: 5,
          borderColor: 'white',
          backgroundColor: ['pink', 'yellow', 'lightblue', 'grey', 'red','lightgreen'],
        },
      ],
    },
  };
    const myChart = new Chart(this.ctx, this.config);
    });

  }
 
  getAllDonations(){
    this.donationservice.getAllDonations().subscribe(res =>{
      this.donationList=res;
    })
  }



deleteDonation(donation : Donation){
    this.donationservice.deleteDonation(donation.id_donation).subscribe(res=>{
      console.log(res);
     // alert("Learning resource was deleted succesfully");
      this.getAllDonations();
      alert("Donation deleted!");
      window.location.href="admin-donation";
    }, err =>{
      console.log(err);
      alert("Sorry unable to delete donation");
      window.location.href="admin-donation";

    })
  }
}



