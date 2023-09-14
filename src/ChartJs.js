import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);
const ChartJs = ({
  type,
  plottingPoints,
  chartTitle,
  xTitle,
  yTitle,
  label,
  xAxisCount,
  yAxisMinAndMax,
  xAxisMinAndMax,
  chartHeight,
  chartWidth,
  color={
    bgColor : "red",
    borderColor : "dorgerBlue"
  }
}) => {
  const [values, setValues] = useState([0]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateTheValues();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const updateTheValues = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setValues((prevValue) => {
      const updatedNumber = [randomNumber, ...prevValue];
      if (updatedNumber.length === (plottingPoints || 5)) {
        updatedNumber.pop();
      }
      return updatedNumber;
    });
  };
  const generateXAxisPoints = (count = 12) => {
    if (count <= 0) {
      return [];
    }
    const numbers = [];
    let currentNumber = 1;
    console.log(Array(count)); //creating a new array instace for the given count to iterate
    for (const _ of Array(count)) {
      numbers.push(currentNumber);
      currentNumber++;
    }
    return numbers;
  };
  const options = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartTitle || "Undefined",
      },
    },
    scales: {
      x: {
        position: "bottom", // Display x-axis labels at the bottom of the chart
        beginAtZero: true, // Start x-axis from zero
        min: xAxisMinAndMax?.min || 0,
        max: xAxisMinAndMax?.max || 20,
        reverse: true,
        ticks: {
          display: true,
        },
        title: {
          display: true,
          text: xTitle || "Undefined",
        },
      },
      y: {
        position: "right", // Display y-axis labels on the right side
        min: yAxisMinAndMax?.min || 0,
        max: yAxisMinAndMax?.max || 10,
        ticks: {
          display: true,
        },
        title: {
          display: true,
          text: yTitle || "Undefined",
        },
      },
    },
  };
  const data = {
    labels: generateXAxisPoints(xAxisCount),
    datasets: [
      {
        type: "line",
        label: label || "Undefined",
        borderColor: color?.borderColor,
        borderWidth: 1,
        backgroundColor: color?.bgColor,
        fill: true,
        data: values,
      },
    ],
  };
  return (
    <div style={{height:chartHeight || "300px" , width:chartWidth || "600px"}} className="chart-wrappper">
      <Chart type={type || "line"} options={options} data={data} />
    </div>
  );
};

export default ChartJs;

//The styling options for the axis

// title: {
//     display: true,          // Display the title
//     text: 'Y-Axis Title',   // The text for the title
//     padding: {              // Padding around the title
//       top: 10,              // Padding on top
//       bottom: 10,           // Padding on bottom
//       left: 10,             // Padding on left
//       right: 10,            // Padding on right
//     },
//     font: {                 // Font settings for the title
//       family: 'Arial',      // Font family
//       size: 14,             // Font size
//       weight: 'bold',       // Font weight
//       style: 'italic',      // Font style
//       color: 'red',         // Font color
//     },
//   },
