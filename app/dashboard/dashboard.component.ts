import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  title = 'Dashboard';

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }
  chartOptionsAllServer = {
    responsive: true,
    scales: {
      xAxes: [{
          stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
  }
  }

  labels =  ['Ser1', 'Ser2', 'Ser3'];
  labelsEnv2 =  ['Ser1', 'Ser3'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'App1',
      data: [21,0,0] 
    },
    { 
      label: 'App2',
      data: [0, 50,0]
    },
    { 
      label: 'App3',
      data: [0, 50, 0]
    },
    { 
      label: 'App4',
      data: [0, 0, 0],
      hidden: true
    }
    
  ];

  //Environment 2

  chartDataEnv2 = [
    {
      label: 'App5',
      data: [0,21] 
    },
    { 
      label: 'App6',
      data: [50,0]
    }
 
  ];

  //All Server Occupied detail
  AllServerOccupiedData = [
    {
      label: 'App1',
      data: [21,0,0] 
    },
    { 
      label: 'App2',
      data: [0, 50,0]
    },
    { 
      label: 'App3',
      data: [0, 50, 0]
    },
    { 
      label: 'App4',
      data: [0, 0, 0],
      hidden: true
    },
    {
      label: 'App5',
      data: [0,0,21] 
    },
    { 
      label: 'App6',
      data: [50,0,0]
    }
    
  ];
  
  

  // CHART COLOR.
  colors = [
    { // App1.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // App2.
      backgroundColor: 'rgba(128,0,128, 0.2)'
    },
    { // App3.
      backgroundColor: 'rgba((0,0,128,0.3)'
    },
    { // App4.
      backgroundColor: 'rgba(0,128,128, 0.2)'
    },
    { // App5.
      backgroundColor: 'rgba(128,0,0,0.2)'
    },
    { // App6.
      backgroundColor: 'rgba(255,0,0, 0.2)'
    }
  ]

  colorsEnv2 = [
    { // App5.
      backgroundColor: 'rgba(128,0,0,0.2)'
    },
    { // App6.
      backgroundColor: 'rgba(255,0,0, 0.3)'
    }
  ]
  
  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }
  

}
