import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokelist = props => {
    const [pokemon, setPokemon] = useState([]);
    let [isClicked, setIsClicked] = useState(false)
    const onClickHandler = (e) => {
        setIsClicked(isClicked = !isClicked);
    }
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=808')
            .then(response => {
                console.log('this is response!',response)
                setPokemon(response.data)
            })
    }, []);


    return (
        <div className="list">
            <button onClick = {onClickHandler} >Fetch Pokemon</button>
            <ol>{isClicked? pokemon.results.map( (poke, i) =>
                    <li key = {i}>{poke.name}</li>
                ): ''}
            </ol>
        </div>
    );
}


export default Pokelist;