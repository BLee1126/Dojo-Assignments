import React from 'react'
import {Link} from '@reach/router'
const ProductList = props => {

    return (
        <div>
            {props.products.map((product, i)=>{
                return <Link to = {`/products/${product._id}`}> <p key={i}>{product.title}, {product.price}, {product.description}</p></Link>
            })}
        </div>
    )
}

export default ProductList;