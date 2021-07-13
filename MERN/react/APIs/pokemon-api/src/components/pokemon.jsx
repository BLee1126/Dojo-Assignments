import React, {useState, useEffect} from 'react';

const Pokelist = props => {
    const [pokemon, setPokemon] = useState([]);
    let [isClicked, setIsClicked] = useState(false)
    const onClickHandler = (e) => {
        setIsClicked(isClicked = !isClicked);
    }
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
            .then(response => response.json())
            .then(response => {
                console.log('this is response!',response)
                setPokemon(response.results)
            })
    }, []);


    return (
        <div className="list">
            <button onClick = {onClickHandler} >Fetch Pokemon</button>
            <ol>{isClicked? pokemon.map( (poke, i) =>
                    <li key = {i}>{poke.name}</li>
                ): ''}
            </ol>
        </div>
    );
}


export default Pokelist;