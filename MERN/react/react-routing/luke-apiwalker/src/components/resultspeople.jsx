import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ResultsPeople = props => {
    const [responseData, setResponseData] = useState(null);
    const [home, setHome] = useState("");
    const [error, setError] = useState(false)
    const logo = 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png'
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response=>{
                setResponseData(response.data)
                axios.get(response.data.homeworld)
                    .then(res => setHome(res.data))
                    .then(setError(false))
            })
            .catch(error => {
                console.log(error) 
                setError(true)
            })
            .then(console.log(responseData))
    }, [props.resource, props.id]); 
    return(
        <div className="results">
            {error? 
            <div>
                <p>These are not the droids you are looking for</p>
                <img src={logo} alt="obiwan" />
            </div> 
            : '' }
            {responseData?
                <div>
                    <p>Name: {responseData.name}</p>
                    <p>Height: {responseData.height}</p>
                    <p>Hair Color: {responseData.hair_color}</p>
                    <p>Skin Color: {responseData.skin_color}</p>
                    <p>Mass: {responseData.mass}</p>
                    <p>Gender: {responseData.gender}</p>
                    <p>Eye Color: {responseData.eye_color}</p>
                    <p>Homeworld: {home.name}</p>
                </div>
                : ''
            }

        </div>
    );
}

export default ResultsPeople