 // Return with commas in between
$(document).ready(function() {
    var prefs = {
        element: ".stackbar"
    };
    $('.stackbar').each(function() {
        prefs.element = $(this);
        new ChartStackBar(prefs);
    });
});

function ChartStackBar(prefs) {
	
	 this.element = $(prefs.element || prefs.elementId);	 
	 this.dataPack1, this.dataPack2, this.dataPack3;
      	 that = this;
	 this.initialise = function() {
		that.dataPack1 = [parseInt(prefs.value1) || 50];
		that.dataPack2 = [parseInt(prefs.value2) || 70]			
		that.dataPack3 = [parseInt(prefs.target1) || 40];
		that.dataPack4 = [parseInt(prefs.target2) || 50];

         };
         this.initialise();

	// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

	var ctx = this.element;
	
	var data = {
		labels: ["x1"],
		datasets: [{
			label: "value1",
			backgroundColor: '#e0924a',
			borderWidth: 1,
			data: that.dataPack1,
			yAxisID: "bar-x-axis1",
		    },        
		    {
			label: "value2",
			backgroundColor: '#67c07f',
			borderWidth: 1,
			data: that.dataPack2,
			yAxisID: "bar-x-axis1",			// will not work if set to 'bar-x-axis2'
		    }
		]
	};
	var options= {
		scales: {
		xAxes: [{
		      display: true,
		      stacked: false,
		      ticks: {
			beginAtZero: true,
			max:100
		      },
		  }],
		  yAxes: [{
		    display: true,
		    stacked: true,         
		    id: "bar-x-axis1",
		    barThickness : 30,
		  },{
		    display: false,
		    stacked: true,
		    id: "bar-x-axis2",
		    barThickness : 30,
		  }],

		},
		annotation: {
		       annotations: [{
				 id: 'hline1',
				 type: 'line',
				 drawTime: 'afterDatasetsDraw',
				 mode: 'vertical',
				 scaleID: 'x-axis-0',
				 value: parseInt(that.dataPack3),
				 borderColor: '#FF7F50',
				 borderWidth: 4,
				 label: {				
				   enabled: false,
				   content: 'Test label',			  
				 } 
			   },
			   {
				 id: 'hline2',
				 type: 'line',
				 mode: 'vertical',
				 scaleID: 'x-axis-0',
				 value: parseInt(that.dataPack4),
				 borderColor: '#2E8B57',
				 borderWidth: 4,
				 label: {
				    backgroundColor: "#006400",
				    content: "Min Value",
				    enabled: false
				 }
		       }]
		     }
	};

	new Chart(ctx, {
	type: 'horizontalBar',
	data: data,
	options: options
	});

}
(function($) {
    $.fn.ChartStackBar = function(prefs) {
        prefs.element = this.selector;
        new ChartStackBar(prefs);
    };
})(jQuery);
