import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate } from '@reach/router'
const Details = props => {
    const [product, setProduct] = useState({})
    // console.log('this is props._id!!', props._id)
    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(navigate('/products'))
            .catch(err => console.log(err))

        }
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props._id)
            .then(res => setProduct(res.data))
    }, [props._id])
    return (
        <div className="container">
            <div>
                <p>Title: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <button onClick={()=>{deleteProduct(product._id)}}>Delete</button>
            <div><Link to={`/products/update/${props._id}`}>Update</Link></div>
            <div>
                <Link to = '/products'>Back</Link>
            </div>
        </div>
    )
}

export default Details;