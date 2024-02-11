import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );
  
  function LineChart({ performance }) {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Fund Performance",
        },
      },
    };
    const labels = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  
    const data = {
      labels,
      datasets: [
        {
          label: "Performance",
          data: [
            performance["2014"],
            performance["2015"],
            performance["2016"],
            performance["2017"],
            performance["2018"],
            performance["2019"],
            performance["2020"],
          ],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    return <Line options={options} data={data} />;
  }
  
  export default LineChart;
  