import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router'
const Details = props => {
    const [product, setProduct] = useState({})
    console.log('this is props.id!!', props.id)
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [props.id])
    return (
        <div className="container">
            <div>
                <p>Title: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <div>
                <Link to = '/products'>Home</Link>
            </div>
        </div>
    )
}

export default Details;