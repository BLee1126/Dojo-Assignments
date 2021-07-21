import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios'

const App = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(!loaded);
            });
    }, [loaded])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm />
            <ProductList products = {product} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default App;
