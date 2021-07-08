import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    
    return(
        <div className="container">
            <form onSubmit={ createUser }>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
        </div>
    );
        
};
    
export default UserForm;
