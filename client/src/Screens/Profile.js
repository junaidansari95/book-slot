import React from 'react';
import { Box, OutlinedInput, InputAdornment, Typography, Card, CardContent, TextField, Button, Avatar } from "@material-ui/core";
export default (props) => {
    const { first_name, last_name, email, avatar } = props.location.state;
    return (
        <Card className="card-root" variant="outlined" >
            <CardContent>
                <Avatar variant="rounded" alt={first_name} src={avatar} style={{ height: 128, width:'auto'}} />
                <Typography variant="h5" component="h2">
                    {first_name}&nbsp;{last_name}
                </Typography>
                <Typography variant="h5" component="h2">
                    {email}
                </Typography>
            </CardContent>
        </Card>
    )
}