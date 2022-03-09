import { Button } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../../App.css';

export default function AddRole(){
    let descriptionText = useRef('');
    let [note, setNote] = useState('test');
   
    const add = async() =>{
        let newRole = {description: descriptionText.current.value}
        const resp = await axios.post('http://localhost:8080/roles',newRole);
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