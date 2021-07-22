import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import axios from 'axios'
import {Link} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
    const [authors, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthor(res.data);
                setLoaded(!loaded);
            });
    }, [loaded])
    const removeFromDom = authorId => {
        setAuthor(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to='/authors/add'>Add an author</Link>
            <h4>We Have quotes by:</h4>
            <AuthorList authors = {authors} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;