import React from "react";
import ReactDOM from "react-dom/client";
import ChartJs from "./ChartJs";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChartJs
      type="bar"
      chartHeight="400px"
      chartWidth="900px"
      plottingPoints={20}
      chartTitle="HARDWARE HEALTH STATUS"
      xTitle="Seconds- (0-60s)"
      yTitle="Frequency "
      label="Server Perfomance"
      xAxisCount={20}
      yAxisMinAndMax = {{
        min : 0,
        max : 10
      }}
      xAxisMinAndMax={{
        min:0,
        max : 20
      }}
      color={{
        bgColor : "gray",
        borderColor : "blue"
      }}
    />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
