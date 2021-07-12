import React from 'react'

const Results = (props) => {
    const handleonClickDelete = (e) => {
        const result = props.myList.filter(myList => myList.content !== e.target.value)
        props.newList(result);
        return result
    }
    const checkedHandler = e => {
        props.updateStatus(e.target.value)
    }

    return (
        <div>
            <h3>Results!!</h3>
            <ul className = 'list list-group'>
                
                {props.myList.map((item, index) => {
                    return <li className = 'list' key= {index} >{item.content} 
                    <input type="checkbox" checked={item.completed} onChange={checkedHandler} value={index}/>
                    <button onClick = {handleonClickDelete} value={item.content}>Delete</button></li>

                })
                }
            </ul>
        </div>
    );
}

export default Results;