import React from 'react'
import {Link} from '@reach/router'
import axios from 'axios';

const ProductList = props => {
    const { removeFromDom } = props;
    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => {removeFromDom(_id)})
            .catch(err => console.log(err))
        }
    return (
        <div>
            {props.products.map((product, i)=>{
                return (<div>
                    <Link to = {`/products/${product._id}`}> <p key={i}>{product.title}, ${product.price}, {product.description}</p></Link>
                    <button onClick={()=>{deleteProduct(product._id)}}>
                    Delete
                    </button>
                </div>)
            })}
        </div>
    )
}


export default ProductList;