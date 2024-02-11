import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ allocation }) {
  const data = {
    labels: ["Domestic", "International", "Bonds", "Cash"],
    datasets: [
      {
        label: "% of allocation",
        data: [
          allocation?.domestic,
          allocation?.international,
          allocation?.bonds,
          allocation?.cash,
        ],
        backgroundColor: ["Blue", "Violet", "Green", "Yellow"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Pie
      data={data}
      options={{
        plugins: {
          legend: { position: "bottom" },
          title: {
            display: true,
            text: "Asset Allocation",
          },
        },
      }}
    />
  );
}

export default PieChart;
