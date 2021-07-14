import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ResultsStarships = props => {
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${props.id}`)
            .then(response=>setResponseData(response.data))
            .catch(error => console.log(error))
            .then(console.log(responseData))
    }, [props.resource, props.id]); 
    return(
        <div className="results">
            {responseData?
                <div>
                    <p>Name: {responseData.name}</p>
                    <p>Max speed: {responseData.max_atmosphering_speed}</p>
                    <p>Crew Size: {responseData.crew}</p>
                    <p>Passengers: {responseData.passengers}</p>
                    <p>Cargo Capacity: {responseData.cargo_capacity}</p>
                    <p>Hyper Drive Rating: {responseData.hyperdrive__rating}</p>
                    <p>Class: {responseData.starship_class}</p>
                </div>
                : ''
            }

        </div>
    );
}

export default ResultsStarships;