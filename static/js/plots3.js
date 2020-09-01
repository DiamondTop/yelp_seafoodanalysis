function init2() {

var defaultURL = "/emoji_char";
d3.json(defaultURL).then(function(data) {
  var data = [data];
  var layout = { 
    title: "Top 15 most mentioned words",
    backgroundColor: "#F5DEB3", // not working
    margin: { t: 30, b: 100 } };
    
  Plotly.plot("bar", data, layout);
});

}
init2();

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


// function init() {
//     var data = [{
//       values: [0, 0, 5, 9],
//       labels: ["Bass", "Chilean", "Fish", "Seafood"],
//       type: "pie"
//     }];
  
//     var layout = {
//         height: 600,
//         width: 800
//       };      

//       Plotly.plot("pie", data, layout);          
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
//     data = [0, 0, 0, 1];
//     break;
//   case "dataset4":
//     data = [1, 1, 31, 6];
//     break;
//   case "dataset5":
//     data = [2, 1, 42, 7];
//     break;
//     case "dataset6":
//     data = [3, 2, 27, 10];
//     break;  
//   default:
//     data = [0, 0, 0, 0];
    
//   }
//   updatePlotly(data);

// }

// init();


//  function init2() { 
//     var data2 = [{
//         values: [1, 1, 31, 6],
//         labels: ["Bass", "Chilean", "Fish", "Seafood"],
//         type: "pie"
//     }];    
      
//     var layout2 = {
//         height: 600,
//         width: 800
//        };  
    
//     Plotly.plot("pie2", data2, layout2);
// }


//   function updatePlotly2(newdata2) {
//     var PIE2 = document.getElementById("pie2");
//     Plotly.restyle(PIE2, "values", [newdata2]);
//   }

 
//   function getData(dataset) {
    
//     var data2 = [];
//     switch (dataset) {
//     case "dataset4":
//       data2 = [1, 1, 31, 6];
//         break;
//     case "dataset5":
//       data2 = [2, 1, 42, 7];
//         break;
//     case "dataset6":
//       data2 = [3, 2, 27, 10];
//         break;
//     default:
//       data2 = [0, 0, 0, 0];
      
//     }
//     updatePlotly2(data2);

//   }

// init2();
  