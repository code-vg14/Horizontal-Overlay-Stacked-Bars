# Horizontal-Overlay-Stacked-Bars
Create Horizontal Overlay Stacked bars with annotations using chart.js.
You can create horizontal overlay stackedbar using this code with chart.js plugin

stack-bar.js file has the code to create hprizontal bars
Usage: 

Create a canvas 

      <canvas class="stackbar" id="bar-chart" height="10" width="150"></canvas>
      
 init the plugin -
 
     $(document).ready(function() {	 
            $("#bar-chart").ChartStackBar({
                  value1:35,
                  value2:70,
                  target1:25, 
                  target2:45,		
               });

      });

In some cases you might need to send elemnt Id in the options like 

             $("#bar-chart").ChartStackBar({
                  element: "#bar-chart",
                  value1:35,
                  value2:70,
                  target1:25, 
                  target2:45,		
               }); 
      
You can hide the graph lines using display:false in x-axis and y-axis

              xAxes: [{
                  display: false,
                }],
               yAxes: [{
                 display: false,
                }]
      
      
    
	   	 	