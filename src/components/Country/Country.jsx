import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.name.common);

    const handleVisited = () => {
        // setVisited(true);

        // basic system

        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // second system
        // setVisited(visited ? false : true);

        // third system
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    // const handleVisitedFlag = () => {
    //     console.log('flag need to be added')
    //     handleVisitedFlag(country.flags.flags.png);
    // }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Region: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => handleVisitedFlag(country?.flags?.flags?.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;