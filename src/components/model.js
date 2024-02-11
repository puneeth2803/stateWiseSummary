import { useEffect, useState } from "react";
import { getCityData } from ".";
import PieChart from "./pie";
import LineChart from "./line";

function Modal({ city, setModel }) {
  const [loading, setLoading] = useState(false);
  const [cityData, setCityData] = useState({});
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCityData(getCityData(city?.id));
      setLoading(false);
    }, 1000);
  }, [city]);
  const renderChart = () => (
    <>
      <div className="chart-wrap">
        <div className="chart-cont">
          <PieChart allocation={cityData?.allocation || {}} />
        </div>
        <div className="chart-cont">
          <LineChart performance={cityData?.performance || {}} />
        </div>
      </div>
      <div className="table-wrap">
        <table className="stock-table">
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Change</th>
            <th>% Change</th>
            <th>Volume</th>
            <th>Market Cap</th>
          </tr>
          {cityData?.stocks?.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td
                style={{ color: stock.change >= 0 ? "green" : "red" }}
              >
                {stock.change}%
              </td>
              <td>{stock.perChange}%</td>
              <td>{stock.volume}M</td>
              <td>{stock.marketCap}M</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
  return (
    <div className="modal-wrap">
      <div className="modal-body">
        <div className="header">
          <p>{city?.name}</p>
          <button onClick={() => setModel(null)}>Close</button>
        </div>
        <div>{loading ? <p>Loading...</p> : renderChart()}</div>
      </div>
    </div>
  );
}

export default Modal;
