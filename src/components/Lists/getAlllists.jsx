import axios from 'axios';
import React, { useState } from 'react';
import { Role as UserList } from '../../Models/Role';
export default function GetAllLists() {
    const [all, setAll] = useState();
    const getAll = async () => {
        let respo = await axios.get('https://foodmartapi-1646848624483.azurewebsites.net/userLists');
        let data = await respo.data;
        console.log(data);
        let allUserList = data.map(r => {
            return <UserList
                key={r.id}
                id={r.id}
            />
        });
        setAll(allUserList);
    }

    return <div>
        <h1> All User Lists </h1>
        <button onClick={getAll}>Get User Lists </button>
        <table>
            <thead>
                <tr><th> ID </th></tr>
            </thead>
            <tbody>
                {all}
            </tbody>


        </table>

    </div>
}
