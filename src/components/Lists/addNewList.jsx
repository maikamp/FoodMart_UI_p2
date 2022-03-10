import { Button } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../../App.css';

export default function AddList(){
    let descriptionText = useRef('');
    let [note, setNote] = useState('');
   
    const add = async() =>{
        let newRole = {description: descriptionText.current.value}
        const resp = await axios.post('https://foodmartapi-1646848624483.azurewebsites.net/userLists',newRole);
        const data = await resp.data;
        console.log(data);
        descriptionText.current.value = '';
        setNote('done');
    }
    return<>
    <h1> Create a New List </h1>
    <input placeholder='list' ref={descriptionText}/>
        <Button onClick={add}>Add</Button>
    <label >{note}</label>
    </>
}