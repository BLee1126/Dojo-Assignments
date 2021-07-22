import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'
import ProductForm from './ProductForm';

const ProductAdd = props => {
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
        axios.post(`http://localhost:8000/api/products/create/`, myForm)
            .then(res => 
            { 
            if(res.data.err){
                console.log('There were errors!');
                setErrors(res.data.err.errors)
            } else {
                console.log("Success!")
                navigate('/products')}})
            .catch(err => console.log("Something went wrong with the post request!", err))
    }
    return (
        <div>
            <h1>Add Product Info!</h1>
            <ProductForm handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </div>
    )
}

export default ProductAdd;