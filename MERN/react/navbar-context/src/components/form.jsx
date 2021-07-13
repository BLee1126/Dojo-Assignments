import React, { useContext } from 'react';
import NameContext from '../context/NameContext';

const Form = props => {
    const context = useContext(NameContext)
    const onChangeHandler = e => {
        context.setName(e.target.value)
    }
    return ( 
        <div className="form">
            Your Name is: <input type="text" onChange ={onChangeHandler}/>
        </div>
    );
}

export default Form;