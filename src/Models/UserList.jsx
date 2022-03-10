import { Button } from "@mui/material";
import React from "react";
import axios from 'axios';
import '../App.css';
export function UserList(props) {
    async function deleteUserList(id){
        const resp = await axios.delete(`https://foodmartapi-1646848624483.azurewebsites.net/userLists?id=${id}`);
        const data = await resp.data;
       
    }
    return <tr>
        <td>{props.id}</td>
        <td>{props.UserList}</td>
        <td><Button onClick={()=>deleteUserList(props.id)}>delete</Button></td>
    </tr>
}