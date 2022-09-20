import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, population, region, capital, area } = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img className='flag' src={flags.png} alt="" />
            <h4>population: {population}</h4>
            <p>region: {region}</p>
            <p>capital: {capital}</p>
            <p>area: {area}</p>
        </div>
    );
};

export default Country;