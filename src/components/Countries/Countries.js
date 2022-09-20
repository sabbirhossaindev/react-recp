import React, { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
    // step: 1
    const [countries, setCounties] = useState([])
    // step: 2
    useEffect(() => {
        // step: 3, setCounties add step: 4
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCounties(data))
    }, [])

    return (
        <div>
            <h1>welcome Countries</h1>
            {/* step: 5  */}
            {
                countries.map(country => <Country name={country.name.common}
                    population={country.population}
                    region={country.region}
                    startOfWeek={country.startOfWeek}
                    maps={country.maps.googleMaps}
                    capital={country.capital}
                    area={ country.area}
                ></Country>)
            }
        </div>
    );
};

export default Countries;