import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css';

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
            <h1>welcome Countries // { countries.length}</h1>
            {/* step: 5  */}
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;