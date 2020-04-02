"use strict"
let myChart = document.getElementById("mychart").getContext('2d');
// clobal options
Chart.defaults.global.defaultFontFamily = 'lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor ='#777';

let massPopChart = new Chart(myChart, {
    type:'pie',
    data:{
    labels:['Boston','Worcaster','Springfield','Lowell','Cambridge','New Bedford'],
    datasets:[{
        label:'Populaiton',
        data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072    
        ],
        backgroundColor:[
        'green',
        'blue',
        'red',
        'yellow',
        'pink',
        'orange'
        ],
        borderWidth:4,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'black'
    }]
    },
    options:{
        title:{
            display:true,
            text:'Largest Cities In Massachusetts',
            fontSize:'25'
        },
        legend:{
        display: true,
        position:'right',
         labels:{
         fontColor:"#000"   
         } 
         },
         layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            },
            tooltips:{
            enabled:true
            }

        }
    }
})