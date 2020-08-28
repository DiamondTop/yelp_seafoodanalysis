// function buildMetadata(word) {
// var url="metadata/" +word
// console.log(url);
//   // @TODO: Complete the following function that builds the metadata panel

//   // Use `d3.json` to fetch the metadata for a sample
//   // Use d3 to select the panel with id of `#sample-metadata`
//   d3.json(url).then(function(response)
//   {
    
//     var panel=d3.select("#sample-metadata");
  
//      // Use `.html("") to clear any existing metadata
//     panel.html("");
//     console.log(response);
//     // Use `Object.entries` to add each key and value pair to the panel
//     Object.entries(response).forEach(function([key, value]) {
    
//       console.log(key, value);  
//       var cell = panel.append("h6");
//           cell.text(`${key} : ${value}`);
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.

//     // BONUS: Build the Gauge Chart
//     buildGauge(response.WFREQ);
    
//   });
// });
// }



//----------------------------------------------------------------------


// function buildCharts(word) {

//   // @TODO: Use `d3.json` to fetch the sample data for the plots
//   var charturl="/samples/"+word;


//       // @TODO: Build a Pie Chart
//     // HINT: You will need to use slice() to grab the top 10 sample_values,
//     // otu_ids, and labels (10 each).
  
//   d3.json(charturl).then(function(data) {
//     console.log(`data ${data}`);
//     var label = data.otu_ids;
//     var values = data.sample_values;
//     var hovertext=data.otu_labels;
//     var data = [{

//       values: values.slice(0,10),
//       labels: label.slice(0,10),
//       hovertext : hovertext.slice(0,10),
//       type: 'pie'
      
//     }];
//     console.log(data)
    
//     var layout = {
//       height: 400,
//       width: 500
//     };
    
//     Plotly.newPlot('pie', data, layout);
    
    
//     var trace1 = {

//       x: label,
    
//       y: values,
    
//       mode: "markers",
    
//       type: "scatter",
    
//       text: hovertext,
    
//       marker: {
    
//         color: label,
//         size:values,
    
//    }
    
//     };
      
//     // Create the data array for the plot
    
//     var data = [trace1];
    
    
    
//     // Define the plot layout
    
//     var layout = {
    
//       title: "Olympic trends over the years",
    
//       xaxis: { title: "Year" },
    
//       yaxis: { title: "Olympic Event" },
      
//     };
    
    
    
//     // Plot the chart to a div tag with id "plot"
    
//     Plotly.newPlot('bubble', data, layout);   
    
//   });
// }
  


//----------------------------------------------------------------------

   // testing for the bar chart with SQL database.

// Plot the default route once the page loads
var defaultURL = "/emoji_char";
d3.json(defaultURL).then(function(data) {
  var data = [data];
  
  var layout = {
    backgroundColor: "#F5DEB3", 
    title: "Most mentioned words",
    color: "#F5DEB3",
    margin: { t: 30, b: 100 } };
  Plotly.plot("bar", data, layout);
});

// Update the plot with new data
function updatePlotly(newdata) {
  Plotly.restyle("bar", "x", [newdata.x]);
  Plotly.restyle("bar", "y", [newdata.y]);
}

// Get new data whenever the dropdown selection changes
function getData(route) {
  console.log(route);
  d3.json(`/${route}`).then(function(data) {
    console.log("newdata", data);
    updatePlotly(data);
  });
}


// @TODO: Build a Bubble Chart using the sample data

// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selDataset");

//   // Use the list of sample names to populate the select options
//   d3.json("/names").then((sampleNames) => {
//     sampleNames.forEach((word) => {
//       console.log(`sample data :${word}`)
//       selector
//         .append("option")
//         .text(word)
//         .property("value", word);
//     });

//     // Use the first sample from the list to build the initial plots
//     const firstSample = sampleNames[0];
//     buildCharts(firstSample);
//     buildMetadata(firstSample);
//   });
// }

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
// }




// // Initialize the dashboard
// init();



 // "pie chart 1"
var trace3 = {
  labels: ["Italian", "American", "Japanese", "French",
      "Steakhouses", "Seafood", "Sushi Bars", "Thai","Chinese","Greek"],
  values: [70036.0, 55469.0, 45546.0, 31345.0, 30205.0, 29282.0, 26072.0, 18930.0,12391.0,11154.0],
  type: 'pie'
};

var data = [trace3];

var layout = {
  title: "Top 10 Cuisines by number of Reviews",
};

Plotly.newPlot("plots4", data, layout);


// pie chart 1 for seabass // 

// function init() {
//   var data = [{
//     values: [0, 0, 5, 9],
//     labels: ["Bass", "Chilean", "Fish", "Seafood"],
//     type: "pie"
//   }];


//   var layout = {
//     height: 600,
//     width: 800
//   };

//   Plotly.plot("pie", data, layout);
// }

// function updatePlotly(newdata) {
//   var PIE = document.getElementById("pie");
//   Plotly.restyle(PIE, "values", [newdata]);
// }

// function getData(dataset) {
//   var data = [];
//   switch (dataset) {
//   case "dataset1":
//     data = [0, 0, 5, 9];
//     break;
//   case "dataset2":
//     data = [0, 0, 5, 8];
//     break;
//   case "dataset3":
//     data = [0, 0, 2, 1];
//     break;
//   default:
//     data = [0, 0, 0, 0];
//   }
//   updatePlotly(data);
// }

// init();



// pie chart 2 for seabass // 

// function init2() {
//   var data2 = [{
//     values: [1, 0, 42, 7],
//     labels: ["Bass", "Chilean", "Fish", "Seafood"],
//     type: "pie"
//   }];

//   var layout2 = {
//     height: 600,
//     width: 800
//   };

//   Plotly.plot("pie2", data2, layout2);
// }

// function updatePlotly(newdata2) {
//   var PIE2 = document.getElementById("pie2");
//   Plotly.restyle(PIE2, "values", [newdata2]);
// }

// function getData2(dataset2) {
//   var data2 = [];
//   switch (dataset2) {
//   case "dataset4":
//     data2 = [1, 0, 42, 7];
//     break;
//   case "dataset5":
//     data2 = [0, 0, 1, 4];
//     break;
//   case "dataset6":
//     data2 = [3, 7, 187, 37];
//     break;
//   default:
//     data2 = [0, 0, 0, 0];
//   }
//   updatePlotly(data);
// }

// init2();
