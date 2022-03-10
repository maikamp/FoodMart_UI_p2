import axios from 'axios';
import React, { useState } from 'react';
import { Role } from '../../Models/Role';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
export default function GetAllRoles() {
    const [all, setAll] = useState();
    const getAll = async () => {
        let respo = await axios.get('http://localhost:8080/roles');
        let data = await respo.data;
        console.log(data);
        let allRoles = data.map(r => {
            return <Role
                key={r.id}
                id={r.id}
                description={r.description}
            />
        });
        setAll(allRoles);
    }

    return <div>
        <button onClick={getAll}>get all roles</button>
        <table>
            <thead>
                <tr><th>id</th><th>description</th></tr>
            </thead>
            <tbody>
                {all}
            </tbody>


        </table>
        <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>

    </div>
}
