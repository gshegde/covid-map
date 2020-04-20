//dependencies axios react-chartjs-2 react-countup classnames

import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changebleurl = url;
    if (country) {
        changebleurl = `${url}/countries/${country}`;
    }

    try {
        //Destructuring the recieved data in clean way...
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changebleurl);
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error) {
        console.log(error);
    }

}


export const fetchDailyData = async () => {

    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailydata) =>
            ({
                confirmed: dailydata.confirmed.total,
                deaths: dailydata.deaths.total,
                date: dailydata.reportDate


            }));
        return modifiedData;
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}




export const getCountriesData = async () => {

    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)

    }
    catch (err) {
        console.log(err);
    }
}