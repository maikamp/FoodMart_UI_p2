import { getRoles } from '@testing-library/react';
import axios from 'axios';
import React from 'react';


export default class Register extends React.Component {

    state = {
        username: '',
        password: '',
        email: ''
    }
    //const [username, setUserrName] = useState('');
    //const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    handleChange = event => {
        this.setState({
            username: event.target.value,
            password: event.target.value,
            email: event.target.value,
            role: event.target.value
        })


        //retrieve roles from data base


        const unorderedList = document.getElementById('userRoles');

        fetch('https://foodmartapi-1646848624483.net/roles')
            .then(response => {
                return response.json();
            })
            .then(userRoles => {
                console.log(userRoles);
                for (const type of userRoles) {
                    const myOption = document.createElement('option');
                    myOption.value = type.id;
                    unorderedList.appendChild(myOption);
                }
            });

    }
    handleSubmit = event => {
        event.preventDefault();



        const User = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role,
        };

       

        axios.post('https://foodmartapi-1646848624483.net/users/addUser', { User })
            .then(res => {
                console.log(res);
                console.log(res.data)
            })

            // if (username === '' || email === '' || password === '' || role === '') {
            //     //setError(true);
            //   } else {
            //     //setSubmitted(true);
            //     // setError(false);
            //    }

    }

    render() {
        return (
            <div>
                <div>
                    <h1>User Registration</h1>
                </div>

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
                        <select id="userRoles" name="userRoles"> </select>
                    </label>

                    <button type="submit" onClick={this.handleSubmit}> Register </button>

                </form>


            </div>



        )
    }

}
