import React, {useState} from 'react';

var List = []
const Tabs = props => {
    const [tab, setTab] = useState('movies')
    const onClickHandler = (e, value) => {
        listRender(`${e.target.value}`)
    }
    
    const listRender = (key) => {
        if (key === 'bands') {
            console.log('bands')
            setTab('bands')
            List = props.Tabs.bands.map((item, index) => {
                return <li key = {index}>{item}</li>
            })

        }
        if (key === 'animals') {
            console.log('animals')
            setTab('animals')
            List = props.Tabs.animals.map((item, index) => {
                return <li key = {index}>{item}</li>
            })

        }
        if (key === 'movies') {
            console.log('movies')
            setTab('movies')
            List = props.Tabs.movies.map((item, index) => {
                return <li key = {index}>{item}</li>
            })
        }
        else {
            return console.log('something went wrong')
        }
    }


    return (
    <div className="container">
        <div className="buttons">
            <button onClick = {onClickHandler} value= 'movies'>movies</button>
            <button onClick = {onClickHandler} value= 'animals'>animals</button>
            <button onClick = {onClickHandler} value= 'bands'>bands</button>
        </div>
        <div className="lists" >
            <ol>
                {List}
            </ol>
    </div>
        </div>
    )
}



export default Tabs