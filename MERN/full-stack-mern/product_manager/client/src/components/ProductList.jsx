import React from 'react'
import {Link} from '@reach/router'
import axios from 'axios';
import DeleteButton from './DeleteBut';

const ProductList = props => {
    const { removeFromDom } = props;
    return (
        <div>
            {props.products.map((product, i)=>{
                return (<div>
                    <Link to = {`/products/${product._id}`}> <p key={i}>{product.title}, ${product.price}, {product.description}</p></Link>
                    <DeleteButton removeFromDom= {removeFromDom} _id={product._id}/>
                </div>)
            })}
        </div>
    )
}


export default ProductList;