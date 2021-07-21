import React, { useState } from 'react'
import {Link} from '@reach/router'

const HomePage = () => {

    return(
        <div className="container">
            <h1>This is the Home Page!</h1>
            <Link to = '/products'>To the form!</Link>
        </div>
    );
}

export default HomePage;