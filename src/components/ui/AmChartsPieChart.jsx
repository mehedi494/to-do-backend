import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { useEffect } from 'react';

const AmChartsPieChart = () => {
  useEffect(() => {
    // Initialize amCharts theme
    am4core.useTheme(am4themes_animated);
    // Hide amCharts logo and link
    am4core.options.commercialLicense = false;
    

    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // This creates initial fade-in
    if(chart.logo){
      chart.logo.disabled=true;
    }
    chart.legend = new am4charts.Legend();

    // Add data
    chart.data = [
      {
        country: "Staking program",
        litres: 12600000000000
      },
      {
        country: "Available for Trade",
        litres: 4200000000000
      },
      {
        country: "CEX Listing",
        litres: 2100000000000
      },
      {
        country: "Marketing & Partnership",
        litres: 2100000000000
      },
    ];
    
    // Create series
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.labels.template.fontSize = 10;
    // Change colors
    series.colors.list = [
      am4core.color("#fea72b"),
      am4core.color("#464682"),
      am4core.color("#717140"),
      am4core.color("#3f3f3f")
    ];

    // Cleanup function
    return () => {
      chart.dispose(); // Dispose the chart when the component unmounts
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
  );
};

export default AmChartsPieChart;
