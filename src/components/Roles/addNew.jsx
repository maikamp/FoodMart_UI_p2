import { Button } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../../App.css';

export default function AddRole(){
    let pathname = window.location.pathname;
  if (localStorage.getItem('username') === null) {
    pathname = '/Login'
    window.location.pathname = pathname;
  }
    let descriptionText = useRef('');
    let [note, setNote] = useState('');
   
    const add = async() =>{
        let newRole = {description: descriptionText.current.value}
        const resp = await axios.post('https://foodmartapi-1646848624483.azurewebsites.net/roles',newRole);
        const data = await resp.data;
        console.log(data);
        descriptionText.current.value = '';
        setNote('done');
    }
    return<>
    <input placeholder='description' ref={descriptionText}/>
    <Button onClick={add}>Add</Button>
    <label >{note}</label>
    </>
}