import React from 'react'

const ColorHeader = props => {
    return(
        <div className="header">
            <h1 style= {{color : props.color, backgroundColor : props.backGround}} >{props.id}</h1>
        </div>
    );
}

export default ColorHeader;