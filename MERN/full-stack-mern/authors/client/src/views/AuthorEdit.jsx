import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate, Link} from '@reach/router'
import AuthorForm from '../components/AuthorForm';

const AuthorEdit = props =>{
    const [myForm, setMyForm] = useState({})
    const [errors, setErrors] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => {
                setMyForm(res.data);
            })
            .catch(err => console.log(err))
    }, [props._id])
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, myForm)
            .then(res => 
            { 
            if(res.data.err){
                console.log('There were errors!');
                setErrors(res.data.err.errors)
            } else {
                console.log("Success!")
                navigate('/')}})
    }
    return (
        <AuthorForm handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
    )
}

export default AuthorEdit;