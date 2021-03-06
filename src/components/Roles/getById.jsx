import { Button } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
export default function GetById() {
    let pathname = window.location.pathname;
    if (localStorage.getItem('username') === null) {
        pathname = '/Login'
        window.location.pathname = pathname;
    }
    const roleId = useRef(0);
    const [role_id, setRole_id] = useState();
    const [role_desc, setRoleDesc] = useState();
    const getById = async () => {
        const num = parseInt(roleId.current.value)
        console.log(typeof num);
        const resp = await axios.get(`https://foodmartapi-1646848624483.azurewebsites.net/roles/byId?id=${num}`);
        const data = await resp.data;
        setRole_id(data.id);
        setRoleDesc(data.description);
        console.log(data);
    }
    return <>
        <input placeholder='get by id' ref={roleId} />
        <Button onClick={getById}>search</Button>
        <table>
            <tbody>
                <tr>
                    <td >{role_id}</td>
                    <td>{role_desc}</td>
                </tr>
            </tbody>

        </table>
    </>
}