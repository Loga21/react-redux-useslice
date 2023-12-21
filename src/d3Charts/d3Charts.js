import React from "react";
import BarChart from "./barChart/barChart";
import PieChart from "./pieChart/pieChart";
import DrawLineChart from "./drawLineChart/drawLineChart";
import LineChart from "./lineChart/lineChart";

const D3Charts = () => {
  return (
    <>
    <BarChart />
    <hr />
    <PieChart />
    <hr />
    <LineChart />
    <hr />
    <DrawLineChart />
    </>
  )
};

export default D3Charts;
