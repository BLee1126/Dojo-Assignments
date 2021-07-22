import React, { useState } from 'react'
import {Link} from '@reach/router'


const AuthorForm = props => {
    const {handleSubmit, onChangeHandler, myForm, errors} = props;

    return(
        <>
            <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label><br/>
                <input type="text" name='firstName' onChange={onChangeHandler} value={myForm.firstName}/>
                </div>
                {
                        errors.firstName ? <span style={{color:'red'}}>{errors.firstName.message}</span> : ""
                }
                <div>
                    <label>Last Name</label><br/>
                    <input type="text" name='lastName' onChange={onChangeHandler} value={myForm.lastName}/>
                </div>
                {
                    errors.lastName ? <span style={{color:'red'}}>{errors.lastName.message}</span> : ""
                }
                <div><Link to='/'><button className='btn-info'>Cancel</button></Link><input className='btn-success'type="submit" value='Submit' /></div>
            </form>
        </>
    )
}
export default AuthorForm;