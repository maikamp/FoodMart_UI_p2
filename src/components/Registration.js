import { getRoles } from '@testing-library/react';
import axios from 'axios';
import React from 'react';


export default class Register extends React.Component{

    state = {
        username: '',
        password: '',
        email: ''
    }
    //const [username, setUserrName] = useState('');
    //const [password, setPassword] = useState('');
   // const [email, setEmail] = useState('');
    handleChange = event => {
        this.setState({ username: event.target.value,
                        password: event.target.value,
                        email: event.target.value,
                        role: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();

        const User = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role,
        };

    axios.post('https://foodmartapi-1646848624483.net/users/addUser' , { User })
        .then(res => {
            console.log(res);
            console.log(res.data)
        })

    }

render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label> 
                    UserName:
                    <input type="text" name="username" onChange={this.handleChange} />
                </label>

                <br></br>

                <label> 
                    Email:
                    <input type="text" name="email" onChange={this.handleChange} />
                </label>

                <br></br>
                <label> 
                    Password:
                    <input type="text" name="password" onChange={this.handleChange} />
                </label>

                <br></br>

                <label>
                    Role:
                    <select>
                        <option value = "1"> 1 </option>
                        <option value = "2"> 2 </option>
                        <option value = "3"> 3 </option>
                    </select>
                </label>
                
                <button type = "submit"> Register </button>
            
            </form>


        </div>

      

    )
}

}
