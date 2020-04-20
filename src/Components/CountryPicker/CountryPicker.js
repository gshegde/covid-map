import React, { useState, useEffect } from 'react';
import { getCountriesData } from '../../api/index';
import { FormControl, NativeSelect, option } from '@material-ui/core';
import styles from './CountryPicker.css'
const CountryPicker = ({ handleCountryChange }) => {
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => {
        const getCountries = async () => {
            setCountriesData(await getCountriesData())
        }
        getCountries();
    }, [setCountriesData])
    return (
        <FormControl className={styles.formcontrol}>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {countriesData.map((country, id) => <option key={id} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )

}

export default CountryPicker;