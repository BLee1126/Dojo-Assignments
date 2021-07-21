import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'
const Update = props => {
    const { _id } = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + _id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, [_id])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + _id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
            navigate('/products')
    }
    return (
        <div>
        <h1>Update a Product</h1>
        <form onSubmit={updateProduct}>
            <div>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </div>
            <div>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </div>
            <input type="submit"/>
        </form>
        </div>
    )
}

export default Update;