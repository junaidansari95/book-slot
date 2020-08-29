/*eslint-disable*/
import React from 'react';
import { Typography, Card, CardContent, Button, Avatar, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addSlot } from '../Actions/userAction';
export default (props) => {
    const { first_name, last_name, email, avatar } = props.location.state;
    const { all_users } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = React.useState('August 29th 02:30 p.m.');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const bookSlot = () => {
        dispatch(addSlot({
            avatar: avatar,
            email: email,
            first_name: first_name,
            last_name: last_name,
            slot: value
        }))
        history.push('/slots')
    }
    return (
        <Card className="card-root" variant="outlined" style={{ maxWidth: 500, margin: '100px auto' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Avatar variant="rounded" alt={first_name} src={avatar} style={{ height: 128, width: 128 }} />
                <Typography variant="h5" component="h2">
                    {first_name}&nbsp;{last_name}
                </Typography>
                <Typography className="adrs-pos" color="textSecondary">
                    {email}
                </Typography>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select a slot from below</FormLabel>
                    <RadioGroup aria-label="slot" name="slot" value={value} onChange={handleChange}>
                        <FormControlLabel value="August 29th 02:30 p.m." control={<Radio />} label="August 29th 02:30 p.m." />
                        <FormControlLabel value="August 29th 07:00 p.m." control={<Radio />} label="August 29th 07:00 p.m." />
                        <FormControlLabel value="August 31st 02:30 p.m." control={<Radio />} label="August 31st 02:30 p.m." />
                        <FormControlLabel value="August 31st 07:00 p.m." control={<Radio />} label="August 31st 07:00 p.m." />
                    </RadioGroup>
                </FormControl>
                <Button variant="outlined" color="primary" type="submit" onClick={bookSlot}>{`Book a slot with ${first_name} ${last_name}`}</Button>
            </CardContent>
        </Card>
    )
}