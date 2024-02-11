import { useEffect, useState } from "react";

import "./App.css";
import { getCities } from "./components";
import Modal from "./components/model";

function App() {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [model, setModel] = useState(null);
  const getColor = (temp) => {
    if (temp > 40) {
      return "red";
    } else if (temp > 35) {
      return "orange";
    } else if (temp > 30) {
      return "yellow";
    } else if (temp > 25) {
      return "pink";
    } else {
      return "blue";
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const cities = getCities();
      setCities(cities);
      setLoading(false);
    }, 1500);
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="grod-layout">
        {cities.map((city, index) => (
          <div
            key={city.id}
            className={"each-card " + "card-" + index}
            style={{ backgroundColor: getColor(city.temp) }}
            onClick={() => setModel(city)}
          >
            <h1 className="header">{city.name}</h1>
            <div className="only-on-hover">
              <p className="city">
                Temperature: {city.temp} <br />
                Population: {city.population}
              </p>
            </div>
          </div>
        ))}
      </div>
      {model !== null && <Modal city={model} setModel={setModel} />}
    </>
  );
}

export default App;
