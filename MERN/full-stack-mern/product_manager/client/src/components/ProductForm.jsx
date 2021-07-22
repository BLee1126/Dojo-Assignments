import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = props => {
    const {handleSubmit, onChangeHandler, myForm, errors} = props;

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label><br/>
                    <input type="text" name='title' onChange={onChangeHandler} value={myForm.title}/>
                </div>
                {
                        errors.title ? <span style={{color:'red'}}>{errors.title.message}</span> : ""
                }
                <div>
                    <label>Price</label><br/>
                    <input type="text" name='price' onChange={onChangeHandler} value={myForm.price}/>
                </div>
                {
                        errors.price ? <span style={{color:'red'}}>{errors.price.message}</span> : ""
                }
                <div>
                    <label>Description</label><br/>
                    <input type="text" name='description' onChange={onChangeHandler} value={myForm.description}/>
                </div>
                {
                        errors.description ? <span style={{color:'red'}}>{errors.description.message}</span> : ""
                    }
                
                <input type="submit"/>
            </form>
    
        </div>
    )
}

export default ProductForm;

