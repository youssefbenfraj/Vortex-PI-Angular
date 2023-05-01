import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart} from 'chart.js';
import { LearningResource } from 'src/app/entities/learning-resource';
import { LearningResourceService } from 'src/app/services/learning-resource.service';


 declare var window: any;

@Component({
  selector: 'app-admin-learning-resource',
  templateUrl: './admin-learning-resource.component.html',
  styleUrls: ['./admin-learning-resource.component.css'],
})
export class AdminLearningResourceComponent implements OnInit {

  formModalAdd: any;
  formModalEdit: any;
  lrDetail !: FormGroup;
  lrObj : LearningResource = new LearningResource();
  lrList : LearningResource[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private lrservice: LearningResourceService
  ) { }

  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];

  chartDataTheme : number[] = [];
  chartDatalabelsTheme : any[] = [];
  
    ngOnInit(): void{

      this.getAllLR();

      //learning resource

      this.lrDetail = this.formBuilder.group({
        id_learningr : [''],
        title_learningr : [''],
        desc_learningr : [''],
        type_learningr : [''],
        url_learningr : [''],
        theme : [''],
        creationdate_learningr : ['']

      });

      
      this.formModalAdd=new  window.bootstrap.Modal(
        document.getElementById('addLR')
      );

      this.formModalEdit=new  window.bootstrap.Modal(
        document.getElementById('editLR')
      );

      


      //chart


 // get stats by type
 this.lrservice.getLRStatsByType().subscribe((data) => {
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
          backgroundColor: ['pink', 'yellow', 'lightblue', 'grey', 'red'],
        },
      ],
    },
  };
  const myChart = new Chart(this.ctx, this.config);
});




      //end chart



      // chart 2 

       // get stats by type
       this.lrservice.getLRStatsByTheme().subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          this.chartDataTheme.push(data[i].data);
          this.chartDatalabelsTheme.push(data[i].label);
        }
      
        // initialize chart
        this.ctx = document.getElementById('myNewChart');
        this.config = {
          type: 'bar',
          options: {},
          data: {
            labels: this.chartDatalabelsTheme,
            datasets: [
              {
                label: 'Chart Data',
                data: this.chartDataTheme,
                borderWidth: 5,
                borderColor: 'white',
                backgroundColor: ['pink', 'yellow', 'lightblue', 'grey', 'red', 'violet', 'brown', 'blue'],
              },
            ],
          },
        };
        const myNewChart = new Chart(this.ctx, this.config);
      });




      // chart 2
      
    }
  

    addLR() {
      console.log(this.lrDetail);
      this.lrObj.id_learningr = this.lrDetail.value.id_learningr;
      this.lrObj.title_learningr = this.lrDetail.value.title_learningr;
      this.lrObj.desc_learningr = this.lrDetail.value.desc_learningr;
      this.lrObj.type_learningr = this.lrDetail.value.type_learningr;
      this.lrObj.url_learningr = this.lrDetail.value.url_learningr;
      this.lrObj.theme = [ this.lrDetail.value.theme];
      this.lrObj.creationdate_learningr = this.lrDetail.value.creationdate_learningr;

      this.lrservice.addLR(this.lrObj).subscribe(res=>{
        console.log(res);
        this.getAllLR();
        alert("Learning resource was added successfully!");
      },err=>{
        console.log(err);
        alert("Error!");
      });
    }

    editLr(lr : LearningResource){
      this.lrDetail.controls['id_learningr'].setValue(lr.id_learningr);
      this.lrDetail.controls['title_learningr'].setValue(lr.title_learningr);
      this.lrDetail.controls['desc_learningr'].setValue(lr.desc_learningr);
      this.lrDetail.controls['type_learningr'].setValue(lr.type_learningr);
      this.lrDetail.controls['url_learningr'].setValue(lr.url_learningr);
      this.lrDetail.controls['theme'].setValue(lr.theme);
      this.lrDetail.controls['creationdate_learningr'].setValue(lr.creationdate_learningr);
    }

    updateLR(){
      this.lrObj.id_learningr = this.lrDetail.value.id_learningr;
      this.lrObj.title_learningr = this.lrDetail.value.title_learningr;
      this.lrObj.desc_learningr = this.lrDetail.value.desc_learningr;
      this.lrObj.type_learningr = this.lrDetail.value.type_learningr;
      this.lrObj.url_learningr = this.lrDetail.value.url_learningr;
      this.lrObj.theme = [];
      this.lrObj.creationdate_learningr = this.lrDetail.value.creationdate_learningr;
  
      this.lrservice.updateLR(this.lrObj).subscribe(res=>{
        console.log(res);
       // this.closeModalEdit();
        this.getAllLR();
        
        alert("LR successfully edited");
      }, err =>{
        console.log(err);
        alert("Sorry lr wasn't edited");
      })
    }

    deleteLR(lr: LearningResource){
      this.lrservice.deleteLR(lr).subscribe(res=>{
        console.log(res);
       // alert("Learning resource was deleted succesfully");
        this.getAllLR();
      }, err =>{
        console.log(err);
        alert("Sorry unable to delete lr");
      })
    }


    getAllLR()
    {
      this.lrservice.getAllLR().subscribe(res=>{
        this.lrList = res;
      }, err=>{
        console.log("Error retreiving all learning resources!")
      });
    }

    // getAllLR() {
    //   this.lrservice.getAllLR().subscribe(res => {
    //     this.lrList = res;
    //     for (let lr of this.lrList) {
    //       this.lrservice.getThemesByLRId(lr.id_learningr).subscribe(res => {
    //         lr.theme = res.map(theme => theme.name_theme).join(", ");
    //       }, err => {
    //         console.log("Error retreiving themes for learning resource!");
    //       });
    //     }
    //   }, err => {
    //     console.log("Error retreiving all learning resources!");
    //   });
    // }
    

    openModal() {
      this.formModalAdd.show();
    }

    openModalEdit() {
      if (this.formModalEdit && this.formModalEdit.show) {
        this.formModalEdit.show();
      }
    }

  }
