const pie_values = {
  pie1: [{
    values: [0, 0, 5, 9],
    labels: ["Bass", "Chilean", "Fish", "Seafood"],
    type: "pie"
  }],
  pie2: [{
    values: [1, 0, 42, 7],
    labels: ["Bass", "Chilean", "Fish", "Seafood"],
    type: "pie"
  }],
};

function init(data, id) {
  var data = data;
  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot(id, data, layout);
}

function updatePlotly(newdata, id) {
  var PIE = document.getElementById(id);
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
  updatePlotly(data, "pie");
}

function getData2(dataset2) {
  var data = [];
  switch (dataset2) {
    case "dataset4":
      data = [1, 0, 42, 7];
      break;
    case "dataset5":
      data = [0, 0, 1, 4];
      break;
    case "dataset6":
      data = [3, 7, 187, 37];
      break;
    default:
      data = [0, 0, 0, 0];
  }
  updatePlotly(data, "pie2");
}

init(pie_values.pie1, "pie"); // pie chart 1 init()
init(pie_values.pie2, "pie2"); // pie chart 2 init()