# Horizontal-Overlay-Stacked-Bars
Create Horizontal Overlay Stacked bars with annotations using chart.js.
You can create horizontal overlay stackedbar using this code with chart.js plugin

stack-bar.js file has the code to create horizontal bars

Usage: 

Create a canvas 

      <canvas class="stackbar" id="bar-chart" height="10" width="150"></canvas>
      
 init the plugin -
 
     $(document).ready(function() {	 
            $("#bar-chart").ChartStackBar({
                  value1:35,  		//*bar1 value*//
                  value2:70,		//*bar2 value*//
                  target1:25, 		//*target/annotation line 1 *//
                  target2:45,		//*target/annotation line 2 *//
               });

      });


In some cases if graph is not rendering, try to pass element Id in the options like this

             $("#bar-chart").ChartStackBar({
                  elementId: "#bar-chart",  	//*canvas Id*//
                  value1:35,  			//*bar1 value*//
                  value2:70,			//*bar2 value*//
                  target1:25, 			//*target/annotation line 1 *//
                  target2:45,			//*target/annotation line 2 *//	
               }); 
You can use these additional properties in options

You can hide the graph lines using display:false in x-axis and y-axis

              xAxes: [{
                  display: false,
                }],
               yAxes: [{
                  display: false,
                }]
      
To hide Legends:

		legend: {
        	   display: false
	 	},
		
To remove tooltips:		

		tooltips: {
        	   enabled: false,
     		 },

To remove "on-hover" effect:

		hover: {
			 mode: null
		},

		
    
	   	 	
