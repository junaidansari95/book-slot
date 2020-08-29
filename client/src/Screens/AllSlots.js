/*eslint-disable*/
import React from 'react';
import { Typography, Card, CardContent, Box, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSlots } from '../Actions/userAction';
export default () => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getSlots())
    },[]);
    const { all_slots, isGetAllSlotsRequestLoading, isAddSlotRequestLoading } = useSelector(state => state.user);
    const history = useHistory();
    if (isGetAllSlotsRequestLoading || isAddSlotRequestLoading) {
        return (
            <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: '25%' }}>
                <CircularProgress size={70} />
            </Box>
        )
    }
    else
        return (
            <Box style={{ margin: 'auto' }}>
                <Box style={{ margin: 'auto' }}>
                    <Typography variant="h5" component="h2" align="center">
                        All booked slots
            </Typography>
                    <Typography variant="h5" component="h2" onClick={() => history.push('/')} style={{ cursor: 'pointer', color: 'blue' }}>
                        {"< Go to home"}
                    </Typography>
                </Box>
                {
                    (undefined !== all_slots && all_slots.length) ? all_slots.map(slot => <Card className="card-root" variant="outlined" style={{ maxWidth: 500, margin: '100px auto' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <Typography className="adrs-pos" color="textSecondary">
                                Your slot @{slot.slot} is booked with {slot.first_name} {slot.last_name}
                            </Typography>
                        </CardContent>
                    </Card>) : <Typography variant="h5" component="h2" align="center" style={{ marginTop:200}}>
                        No slots booked
            </Typography>
                }
            </Box>
        )
}