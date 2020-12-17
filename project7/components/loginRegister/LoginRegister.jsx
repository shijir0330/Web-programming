import React from 'react';
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    Badge,
    Grid
}
    from '@material-ui/core';
import './LoginRegister.css';
import axios from "axios";

class LoginRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_name: "",
            login_pass: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({login_name: event.target.value}); // Common approach to push into component state
    }

    handleChangePass(event) {
        this.setState({login_pass: event.target.value}); // Common approach to push into component state
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(`/adming/login`, this.state).then(res => {
            this.props.setData(res.data.first_name + " " + res.data.last_name, true);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Grid item sm={3}>
                        <label>
                            Name: <input type="text" value={this.state.login_name} onChange={this.handleChangeName}/>
                        </label>
                        <label>
                            Password: <input type="text" value={this.state.login_pass}
                                             onChange={this.handleChangePass}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </Grid>
                </form>
            </div>
        );
    }
}

export default LoginRegister;