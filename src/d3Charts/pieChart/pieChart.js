import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import {
  select
} from "d3";

const data = [
  { platform: "Android", percentage: 40.11 },
  { platform: "Windows", percentage: 36.69 },
  { platform: "iOS", percentage: 13.06 },
];

const PieChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    const svgWidth = 500,
      svgHeight = 300,
      radius = Math.min(svgWidth, svgHeight) / 2;
    svg.select("svg").attr("width", svgWidth).attr("height", svgHeight);

    //Create group element to hold pie chart
    svg
      .append("g")
      .attr("transform", "translate(" + radius + "," + radius + ")");

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value(function (d) {
      return d.percentage;
    });

    const path = d3.arc().outerRadius(radius).innerRadius(0);

    const arc = svg.selectAll("arc").data(pie(data)).enter().append("g");

    arc
      .attr("transform", "translate(180, 160)")
      .append("path")
      .attr("d", path)
      .attr("fill", function (d) {
        return color(d.data.percentage);
      });

    const label = d3.arc().outerRadius(radius).innerRadius(0);

    arc
      .append("text")
      .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
      })
      .attr("text-anchor", "middle")
      .text(function (d) {
        return d.data.platform + ":" + d.data.percentage + "%";
      });
  });

  return <svg ref={svgRef} style={{ width: 800, height: 350 }}></svg>;
};

export default PieChart;
