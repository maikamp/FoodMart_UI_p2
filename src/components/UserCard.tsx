import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

interface Role {
    description: string
}

interface User {
    username: string,
    email: string,
    role: Role
}

export default function UserCard() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("https://foodmartapi-1646848624483.azurewebsites.net/users/id?id=1")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    // @ts-ignore
    const {username, email, role}: User = item;


        if(error) {
            // @ts-ignore
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {username}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {email}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Snoopy
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            );
        }

}