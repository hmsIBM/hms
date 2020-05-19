import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
@Injectable({
  providedIn: 'root'
})
export class HighchartsService {

  constructor() { }

  count:Array<any>=[];
  charts = [];
  defaultOptions = {
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },
    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },
    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            pointStart: 2010
        }
    },
    series: [{
        name: 'Total Patients',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Doctors',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Depatment',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Appointments',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
     }
    //  ,
    //  {
    //     name: 'Other',
    //     data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    // }
  ]
  }

  
  createChart(container,options?: Object) {
    // this.count=c;
    console.log(this.count)
    let opts = !!options ? options : this.defaultOptions;
    let e = document.createElement("div");
    
    container.appendChild(e);
    
    if(!!opts.chart) {
      opts.chart['renderTo'] = e;
    }
    else {
      opts.chart = {
        'renderTo': e
      }
    }
    this.charts.push(new Highcharts.Chart(opts));
  }
  
  removeFirst() {
    this.charts.shift();
  }
  
  removeLast() {
    this.charts.pop();
  }
  
  getChartInstances(): number {
    return this.charts.length;
  }

  getCharts() {
    return this.charts;
  }
}
