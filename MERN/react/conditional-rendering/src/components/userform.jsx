import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameerror, setFirstnameerror] = useState(true)
    const [lastNameerror, setLastnameerror] = useState(true)
    const [emailError, setEmailerror] = useState(true)
    const [passwordError, setPassworderror] = useState(true)
    const [conPasswordError, setconPassworderror] = useState(true)
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
	}
    };
    const ValidationfirstName = (e) => {
        setFirstname(e.target.value)
        if ( e.target.value.length === 1 ) {
            setFirstnameerror("First Name must be at least 2 characters")
        }
        else{
            setFirstnameerror('')
        } 
    }
    const ValidationlastName = (e) => {
        setLastname(e.target.value)
        if ( e.target.value.length === 1 ) {
            setLastnameerror("Last Name must be at least 2 characters")
        }
        else{
            setLastnameerror('')
        } 
    }
    const Validationemail = (e) => {
        setEmail(e.target.value)
        if ( e.target.value.length > 0 && e.target.value.length < 5 ) {
            setEmailerror("Email must be at least 5 characters")
        }
        else{
            setEmailerror('')
        } 
    }
    const Validationpassword = (e) => {
        setPassword(e.target.value)
        if ( e.target.value.length > 0 && e.target.value.length < 8 ) {
            setPassworderror("Passwords must be at least 8 characters")
        }
        else{
            setPassworderror('')
        } 
    }
    
    const ValidationConfirmpassword = (e) => {
        setConfirmPassword(e.target.value)
        if ( e.target.value !== password) {
            setconPassworderror("Passwords do not match!")
        }
        else{
            setconPassworderror('')
        } 
    }

    return(
        <div className="container">
            <form onSubmit={ createUser }>
                <h3>{formMessage()}</h3>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={ ValidationfirstName} />
                    {
                        firstNameerror ?
                        <p style={{color:'red'}}>{firstNameerror}</p>
                        :''
                    }
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={ ValidationlastName } />
                    {
                        lastNameerror ?
                        <p style={{color:'red'}}>{lastNameerror}</p>
                        :''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ Validationemail } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p>
                        :''
                    }
                    
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ Validationpassword} />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p>
                        :''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ ValidationConfirmpassword } />
                    {
                        conPasswordError ?
                        <p style={{color:'red'}}>{conPasswordError}</p>
                        :''
                    }
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
