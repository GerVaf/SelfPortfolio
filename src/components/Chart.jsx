import React from "react";
import ReactApexChart from "react-apexcharts";

const PolarAreaChart = () => {
  const options = {
    chart: {
      id: "polar-area-chart",
    },
    labels: ["HTML", "CSS", "Javascript", "TypeScript", "ReactJs", "NodeJs"],
    yaxis: {
      show: false
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [100, 85, 70, 30, 90, 42];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="polarArea"
        width="500"
      />
    </div>
  );
};

export default PolarAreaChart;
