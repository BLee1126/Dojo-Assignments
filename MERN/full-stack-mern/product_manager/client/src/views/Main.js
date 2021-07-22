import React, { useEffect, useState } from 'react';
import ProductAdd from '../components/ProductAdd';
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
            <ProductAdd />
            <ProductList products = {product} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default App;
