import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h3>Country Name: {props.name}</h3>
            <h4>population: {props.population}</h4>
            <p>region: {props.region}</p>
            <p>startOfWeek: {props.startOfWeek}</p>
            <h3>maps: {props.maps}</h3>
            <p>capital: {props.capital}</p>
            <p>area; { props.area}</p>
        </div>
    );
};

export default Country;