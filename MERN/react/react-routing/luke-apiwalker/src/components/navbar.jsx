import './navbar.css'
import React, {useState} from 'react';
import {Link} from '@reach/router'



const NavBar = props => {
    const [resource, setResource] = useState('people')
    const [id, setId] = useState(0)
    const onChangeHandler = e => {
        if(e.target.name === 'resources'){
            setResource(e.target.value)
        }
        else if(e.target.name === 'id'){
            setId(e.target.value)
        }
        else{
            console.log('Else statement!', e.target.name, e.target.value)
        }
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        props.newSearch({'resource': resource, 'id': id})
    }



    return (
        <div className="navbar">
            <h1>hello! welcome to my lukeAPIwalker app</h1>
            <form action="" className='navBarform' onSubmit={onSubmitHandler}>
                <label htmlFor="resources">Search for: </label>
                <select name = 'resources' id='resources' onChange={onChangeHandler}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input type='number'  name='id' onChange = {onChangeHandler}/>
                <Link to = {`/search/${resource}/${id}`}><input type="submit" value='Search' className='btn btn-primary'/></Link>
            </form>
        </div>
    );
}

export default NavBar