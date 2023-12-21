import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";
import {
  select
} from "d3";

var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160, 130, 160];

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const svgWidth = 500,
      svgHeight = 300,
      barPadding = 5;
    const barWidth = svgWidth / dataset.length;
    svg.select("svg").attr("width", svgWidth).attr("height", svgHeight);

    // const xScale = scaleLinear()
    //   .domain([0, d3.max(dataset)])
    //   .range([0, svgWidth]);

    // const yScale = scaleLinear()
    //   .domain([0, d3.max(dataset)])
    //   .range([svgHeight, 0]);

    // const x_axis = axisBottom().scale(xScale);

    // const y_axis = axisLeft().scale(yScale);

    svg
      .append("g")
      .attr("transform", "translate(50, 10)")
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("y", function (d) {
        return svgHeight - d;
      })
      .attr("height", function (d) {
        return d;
      })
      .attr("width", barWidth - barPadding)
      .attr("class", "bar")
      .attr("transform", function (d, i) {
        const translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
      });

    svg
      .append("g")
      .attr("transform", "translate(50, 10)")
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function (d) {
        return d;
      })
      .attr("y", function (d, i) {
        return svgHeight - d - 2;
      })
      .attr("x", function (d, i) {
        return barWidth * i;
      })
      .attr("fill", "#A64C38");
  }, [dataset]);

  return (
    <svg
      ref={svgRef}
      style={{ width: 800, height: 300 }}
    ></svg>
  );
};

export default BarChart;
