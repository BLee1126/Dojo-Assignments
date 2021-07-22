import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate, Link} from '@reach/router'
import AuthorForm from '../components/AuthorForm';

const AuthorAdd = props => {
    const [myForm, setMyForm] = useState({
        title: "",
        price: 0,
        description: ''
    })
    const [errors, setErrors] = useState({})

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors/create/`, myForm)
            .then(res => 
            { 
            if(res.data.err){
                console.log('There were errors!');
                setErrors(res.data.err.errors)
            } else {
                console.log("Success!")
                navigate('/')}})
            .catch(err => console.log("Something went wrong with the post request!", err))
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <h4>Add a new author:</h4>
            <AuthorForm handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </div>
    )
}

export default AuthorAdd;