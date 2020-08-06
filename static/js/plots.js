function init() {
  var data = [{
    values: [0, 0, 5, 9],
    labels: ["Bass", "Chilean", "Fish", "Seafood"],
    type: "pie"
  }];


  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  var PIE = document.getElementById("pie");
  Plotly.restyle(PIE, "values", [newdata]);
}

function getData(dataset) {
  var data = [];
  switch (dataset) {
  case "dataset1":
    data = [0, 0, 5, 9];
    break;
  case "dataset2":
    data = [0, 0, 5, 8];
    break;
  case "dataset3":
    data = [0, 0, 2, 1];
    break;
  default:
    data = [0, 0, 0, 0];
  }
  updatePlotly(data);
}

init();
