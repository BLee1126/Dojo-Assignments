import React from 'react'
import Navbar from './navbar'
import FormWrapper from './formwrapper';

const Wrapper = props => {


    return (
        <div className="wrapper">
            <Navbar/>
            <FormWrapper></FormWrapper>
        </div>

    );
}

export default Wrapper;