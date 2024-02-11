import cities from "./data";

export const getCities = () => {
  return cities.map((c) => ({
    name: c.name,
    temp: c.temp,
    population: c.population,
    id: c.id,
  }));
};

export const getCityData = (cityId) => {
  return cities.find((c) => c.id === cityId) || {};
};
