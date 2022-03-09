import { Button } from "@mui/material";
import React from "react";
import axios from 'axios';
import '../App.css';
export function Role(props) {
    async function deleteRole(id){
        const resp = await axios.delete(`http://localhost:8080/roles?id=${id}`);
        const data = await resp.data;
        // console.log(data);
    }
    return <tr>
        <td>{props.id}</td>
        <td>{props.description}</td>
        <td><Button onClick={()=>deleteRole(props.id)}>delete</Button></td>
    </tr>
}