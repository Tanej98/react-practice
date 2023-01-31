import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataValue = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
