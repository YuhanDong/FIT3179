var vg_1 = "emissions_by_gas.vg.json";
var vg_2 = "emissions_by_sector.vg.json";
var vg_3 = "emissions_by_gdp.vg.json";
var vg_4 = "emissions_over_time.vg.json";
var vg_5 = "emissions_per_capita.vg.json";

vegaEmbed("#gas", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#sector", vg_2).then(function(result){}).catch(console.error);
vegaEmbed("#gdp", vg_3).then(function(result){}).catch(console.error);
vegaEmbed("#time", vg_4).then(function(result){}).catch(console.error);
vegaEmbed("#capita", vg_5).then(function(result){}).catch(console.error);