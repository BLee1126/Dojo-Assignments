import React, {useState} from 'react'

const Form = (props) => {
    const [todo, setTodo] = useState(
        {
            'content' : '',
            'completed' : false
        }
    )

    const onChangeHandler = e => {
        setTodo({'content': e.target.value})
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        setTodo({...todo, 'content' : e.target.todo.value});
        props.newTodo(todo);
    }

    return (
        <div>
            <h1>To do list!</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="todo"></label>
                <input type="text" name='todo' onChange = {onChangeHandler}/>
                <input type="submit" />
            </form>
        </div>
        
    );
}

export default Form;