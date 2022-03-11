import { Button } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
export default function GetListById() {
    let pathname = window.location.pathname;
    if (localStorage.getItem('username') === null) {
        pathname = '/Login'
        window.location.pathname = pathname;
    }
    const UserListId = useRef(0);
    const [userList_id, setUserList_id] = useState();
    const [useList_desc, setUserListDesc] = useState();
    const getListById = async () => {
        const num = parseInt(UserListId.current.value)
        console.log(typeof num);
        const resp = await axios.get(`https://foodmartapi-1646848624483.azurewebsites.net/userLists/byId?id=${num}`);
        const data = await resp.data;
        setUserList_id(data.id);
        console.log(data);
    }
    return <>
        <input placeholder='get by id' ref={UserListId} />
        <Button onClick={getListById}>search</Button>
        <table>
            <tbody>
                <tr>
                    <td >{userList_id}</td>
                    <td>{useList_desc}</td>
                </tr>
            </tbody>

        </table>
    </>
}