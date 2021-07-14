import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ResultsPlanets = props => {
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response=>setResponseData(response.data))
            .catch(error => console.log(error))
            .then(console.log('we are in ResultsPlanets!',responseData))
    }, [props.resource, props.id]); 
    return(
        <div className="results">
            {responseData?
                <div>
                    <p>Name: {responseData.name}</p>
                    <p>Rotation Period: {responseData.rotation_period}</p>
                    <p>Orbital Period: {responseData.orbital_period}</p>
                    <p>Diameter: {responseData.diameter}</p>
                    <p>Climate: {responseData.climate}</p>
                    <p>Gravity: {responseData.gravity}</p>
                    <p>Population: {responseData.population}</p>
                </div>
                : ''}
        </div>
    );
}

export default ResultsPlanets