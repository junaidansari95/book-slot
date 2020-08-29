import React from "react";
import '../App.css';
import { Box, OutlinedInput, InputAdornment, Typography, Card, CardContent, Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../Utils/history";
import { getPeople, getSlots } from "../Actions/userAction";

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            searchString: '',
            locFilter: '',
            name: '',
            location: '',
        };
    }
    componentDidMount() {
        this.props.getPeople();
        this.props.getSlots();
    }
    handleChange = event => {
        this.setState({ searchString: event.target.value.trim().toLowerCase() });
    }
    handleLoc = event => {
        this.setState({ locFilter: event.target.value })
    }
    handleNameChange = event => {
        this.setState({ name: event.target.value });
    }
    handleLocationChange = event => {
        this.setState({ location: event.target.value });
    }
    render() {
        var { searchString } = this.state;
        const { all_users } = this.props;
        let text = all_users;
        if (undefined !== all_users && all_users.length) {
            if (searchString) {
                text = text.filter(info => (info.first_name.toLowerCase().match(searchString) || info.last_name.toLowerCase().match(searchString)));
            }
        }
        return (
            <Box>
                <Typography variant="h5" gutterBottom onClick={() => history.push('/slots')} align="right" style={{cursor:'pointer', color:'blue'}}>All Slots{">"}</Typography>
                <Box style={{ margin: 'auto', width: 500, display: 'flex', justifyContent: 'center', marginTop: 180, marginBottom: 100 }}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h4" gutterBottom align='center'>Who</Typography>
                        <Typography variant="caption" display="block" color='textSecondary'>Person's name</Typography>
                        <OutlinedInput
                            placeholder='Name' onChange={this.handleChange}
                            endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>} />
                    </Box>
                </Box>
                <Box className="grid-container">
                    <Box className="grid-row">
                        <Box className="grid-row">
                            {
                                (undefined !== all_users && all_users.length) ? text.map(index => {
                                    return <Card className="card-root" variant="outlined" key={index.id} onClick={()=>history.push({ pathname: '/profile', state: index })}>
                                        <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Avatar alt={index.first_name} src={index.avatar} />
                                            <Typography variant="h5" component="h2">
                                                {index.first_name}&nbsp;{index.last_name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                }) : null
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}
const mapStateToProps = state => {
    const { user } = state;
    const { all_users } = user;
    return ({ all_users })
};
export default connect(mapStateToProps, { getPeople, getSlots })(withRouter(Main));