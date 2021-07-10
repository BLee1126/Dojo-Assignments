import React, { useState } from 'react';
import Box from './boxes'



const BoxGenerator = (props) => {
    const [colors, setColors] = useState([]);

    const handleChange = e => {
        let value = e.target.value;
        console.log(value)
        
    }
    const HandleSubmit = e => {
        e.preventDefault();
        console.log('this is submit!', e.target.color.value);
        colors.push(e.target.color.value);
        console.log('colors: ', colors);
    }
    const renderBox = (color) => {
        return <div style = {{width: '10%', height: '20%', backgroundColor: `${color}`}}></div>
    }



    return (
        <div>
            <form onSubmit = {HandleSubmit} >
                <label htmlFor="color">Color: </label>
                <input type="text" name='color' onChange = {handleChange}/>
                <input type="submit" value='Add' />
            </form>
            <div className="boxes" style = {{display: "flex", height: '80vh', gap: '1.5em'}}>
                {
                    colors.map((item) =>
                        renderBox(item)
                    )
                }

            </div>
        </div>
    );
}

export default BoxGenerator;
