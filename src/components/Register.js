import * as React from 'react';
import {useState, useEffect} from 'react';


export default function Register(){
    const [username, setUserrName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault()

        const user = {username, password, email}

        fetch("https://foodmartapi-1646848624483.azurewebsites.net/users/addUser", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("User Added")
        })}
    

    


    return (
    <form onSubmit = {this.handleSubmit}> 
     <input placeholder='username' id = 'loginText' ref ={username} />
     <input placeholder='password' id = 'loginText' ref ={password} />
     <input placeholder='email' id = 'loginText' ref = {email} />
    <select>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <button id = 'registerButton' onClick={submitRegister}> Register </button>
     <label> Register  </label>
    </form>
    )
}