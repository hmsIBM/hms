import { 
  Component,
   LOCALE_ID ,
  // OnInitComponent,
  OnInit,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
  ViewEncapsulation} from '@angular/core';
  import * as Highcharts from 'highcharts';
import { HighchartsService } from '../services/highcharts.service';
import { ChartOptions, ChartType, ChartDataSets,RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { CountService } from '../services/count.service';
import 'rxjs/add/operator/map';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import 'rxjs/add/operator/share';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class DashboardComponent implements OnInit ,AfterViewInit, OnDestroy{
   @ViewChild('charts') public chartEl: ElementRef;
 

  count:Array<any>=[];
  myCustomOptions
  depts:Array<any>=[]
  deptnames:Array<any>=[];
  doctor:Array<any>=[];
  patient:Array<any>=[];
  male:number=0;
  female:number=0;
  others:number=0;
  date1:any;
  date:Date;
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = '';

  
  
  ngOnInit() 
  {
    this.date1=new Date();
    console.log(this.date1);
   



    this.cs.fetchCount()
    .subscribe((res:any)=>{
      console.log("fdjhjd")
      this.count=res;
      console.log(this.count);
       for(let c of this.count){
         console.log("cdcdfd"+c)
       }
       this.myCustomOptions = {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Hospital bar chart'
        },
        xAxis: {
          categories: ['Patient', 'Doctor', 'Department', 'Appointment']
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Hospital Details'
          }
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [
         {
         
          data:this.count
          
        }
      ]
      };
      this.createCustomChart(this.myCustomOptions);
    });
    

    this.loadData();
  
   
  }

  chartsList;
 
  constructor(private hcs: HighchartsService, private changeDetectionRef: ChangeDetectorRef,private cs:CountService) {
    setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
       }, 1000);
  
  }

  public ngAfterViewInit() {
  }

  public ngOnDestroy() {
  }

  

  createCustomChart(myOpts: Object) {
    console.log("bar chart")
    this.hcs.createChart(this.chartEl.nativeElement, myOpts);
  }


  public barChartOptions: ChartOptions = {
    responsive: true,
    scales:
    {
      yAxes:[{
              display:true,
              ticks:{
                      suggestedMin:0,
                      // suggestedMax:10,
                      beginAtZero:true,
                      // steps:10,
                      // stepValue:5
                    }
            }]
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  // ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartData: ChartDataSets[] = [];
 

loadData(){
  this.cs.loadData()
  .subscribe((res:Array<any>)=>{
    this.depts=res;
    console.log("DEpartments"+this.depts);
    for(let d of this.depts){
      this.deptnames.push(d.departmentName);
      console.log(d.departmentName);
      this.doctor.push(d.doctor.length);
      this.patient.push(d.patient.length);
    }
    console.log(this.deptnames);
    console.log("Doctor====="+this.doctor);
    console.log("Patient======"+this.patient)
    // this.deptnames.push('shubham');
    // this.deptnames.push('digvijay');
     this.barChartLabels= this.deptnames;
     this.barChartData = [
      { data: this.doctor, label: 'Doctors' },
      { data: this.patient, label: 'Patients' }
    ];
    this.loadDataPie();
      
  });
  
}


  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  loadDataPie(){
    console.log("loadDataPie"+this.patient.length);
    for(let d of this.depts){
      for(let p of d.patient)
      {
        console.log(p.gender);
        if(p.gender==="Male"||p.gender==="male"){
        ++this.male;
        }
      else if(p.gender==="Female"||p.gender==="female"){
        ++this.female;
      }
      else{
        ++this.others;
      }
    }
  }
    console.log("male====="+this.male);
    console.log("female====="+this.female);
    console.log("others====="+this.others);
    this.pieChartLabels= ['Male','Female','Other'];
    this.pieChartData=[this.male,this.female,this.others];
    this.pieChartType= 'pie';
  }
 
  

}

