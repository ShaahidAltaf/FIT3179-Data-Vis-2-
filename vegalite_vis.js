var spec2 = "test.vg.json";  // Path to your first chart spec (map chart)
vegaEmbed('#map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "stackedChart.vg.json";  // Path to your second chart spec (stacked area chart)
vegaEmbed('#Stacked_chart', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
