import React, { useReducer } from 'react';

function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
}

const Form = (props) => {
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };
     

        const [state, dispatch] = useReducer(reducer, initialState);
        function handleChange(e) {
            const { name, value } = e.target;
            dispatch({
                type: name,
                payload: value
            });
            // if (name === 'firstName'){
            //     if (value.length < 2){
            //         state.firstName.error = 'Hey, put at least 2 characters for first name!'
            //     }
            // }
            // if (name === 'lastName'){
            //     if (value.length < 2){
            //         state.lastName.error = 'Hey, put at least 2 characters for last name!'
            //     }
            // }
            // if (name === 'email'){
            //     let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            //     if (value.match(mailformat) !== true){
            //         state.email.error = 'Hey, put in a valid email address!'
            //     }
            // }

        }
        return (
            <div>
                {JSON.stringify(state)}
                <div>
                    <label>
                        <span>First Name:</span>{' '}
                        <input
                            name="firstName"
                            value={state.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    {
                    state.firstName.error !== null && (<p className="error">{state.firstName.error}</p>)
                    }
                </div>
                <div>
                    <label>
                        <span>Last Name:</span>{' '}
                        <input
                            name="lastName"
                            value={state.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    {
                    state.lastName.error !== null && (<p className="error">{state.lastName.error}</p>)
                    }
                </div>
                <div>
                    <label>
                        <span>Email:</span>{' '}
                        <input
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </label>
                    {
                    state.email.error !== null && (<p className="error">{state.email.error}</p>)
                    }
                </div>
            </div>
        );
}




export default Form;

