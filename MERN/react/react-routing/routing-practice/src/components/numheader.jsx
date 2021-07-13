import React from 'react'

const NumHeader = props => {
    const CheckId = () => {
        if (isNaN(+props.id) === false){
            return `The number is: ${props.id}`
        }
        else 
        return `The word is: ${props.id}`
    }

    return(
        <div className="header">
            <h1>{CheckId()}</h1>
        </div>
    );
}

export default NumHeader;