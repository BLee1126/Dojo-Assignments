import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate } from '@reach/router'
import DeleteButton from '../components/DeleteBut';

const Details = props => {
    const [product, setProduct] = useState({})
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
            <DeleteButton  _id={product._id}/>
            <div><Link to={`/products/update/${props._id}`}>Update</Link></div>
            <div>
                <Link to = '/products'>Back</Link>
            </div>
        </div>
    )
}

export default Details;