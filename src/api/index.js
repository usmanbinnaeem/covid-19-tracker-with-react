import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

// export const getDailyData = async () => {
//   const globalStatee = await fetch(
//     "https://thevirustracker.com/timeline/map-data.json"
//   );

//   // const dataa = globalState.json();

//   return dataa.map((globalStatee) => ({
//     cases: globalStatee.results[0].total_cases,
//     deaths: globalStatee.results[0].total_deaths,
//     unresolved: globalStatee.results[0].total_unresolved,
//     recovered: globalStatee.results[0].total_recovered,
//   }));
// };

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
