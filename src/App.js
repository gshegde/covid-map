import React from 'react';
import Cards from './Components/Cards/Cards'
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css'
import { fetchData } from './api';
import coronaimg from './images/imagec.png';
import { Typography } from '@material-ui/core';
class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetcheddata = await fetchData();
        this.setState({ data: fetcheddata })
        console.log(fetcheddata);
    }
    handleCountryChange = async (country) => {
        const fetchcountryData = await fetchData(country);
        console.log(fetchcountryData);
        this.setState({ data: fetchcountryData, country: country })
    }
    render() {
        //destruct data from state object
        const { data, country } = this.state;
        console.log('rendering')
        return (
            <div>
                <div className={styles.container}>
                    <img className={styles.imgr} src={coronaimg} alt="COVID-19" />
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />

                </div>
                <label align="right" className={styles.foot}>goutamhegde393@gmail.com</label>
            </div>
        )
        


    }
}

export default App;
