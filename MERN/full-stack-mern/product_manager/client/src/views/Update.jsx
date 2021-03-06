import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'
import ProductForm from '../components/ProductForm'
const Update = props => {
    const [myForm, setMyForm] = useState({})
    const [errors, setErrors] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
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
        axios.put(`http://localhost:8000/api/products/update/${props._id}`, myForm)
            .then(res => 
            { 
            if(res.data.err){
                console.log('There were errors!');
                setErrors(res.data.err.errors)
            } else {
                console.log("Success!")
                navigate('/products')}})
    }
    return (
        <div>
            <h1>Update Product Info!</h1>
            <ProductForm handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </div>
    )
}

export default Update;