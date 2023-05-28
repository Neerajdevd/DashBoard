 var openSidebar=false;
 var sidebar=document.getElementById("sidebar");

 function openSidebar(){
    if(!openSidebar){
        sidebar.classList.add("sidebar-responsive");
        openSidebar=true;
    }
 }
 function closeSidebar(){
    if(openSidebar){
        sidebar.classList.remove("sidebar-responsive");
        openSidebar=false;
    }
 }
 //bar chart
 
 var barchartoptions = {
    series: [{
    data: [400, 430, 448, 470, 540,],
   
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
    show:false
    },
    
  },
  colors:[
    "#367952",
    "#367952",
    "#367952",
    "#367952",
    "#367952",
  ],

  
  plotOptions: {
    bar: {
        distributed:true,
      borderRadius: 4,
      horizontal: true,
      columnWidth:'40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    ],
  }
  };

  var barchart = new ApexCharts(document.querySelector("#bar-chart"), barchartoptions);
  barchart.render();
  
  
  
  var areaChartoptions = {
    series: [{
    name: 'Sales this Months',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, ]
  }, {
    name: 'Per Day',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52,]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar:{
        show:true
    }
  },
  colors:["#246dec"],
  dataLabels:{
    enabled:false
  },
  stroke: {
    curve: 'smooth'
  },
  
  labels: ['May 01', 'May 02','May 03','May 04','May 05','May 06','May 07','May 08',],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartoptions);
  areaChart.render();
