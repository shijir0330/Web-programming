import React from 'react';
import {
    Typography
} from '@material-ui/core';
import './userDetail.css';
import axios from "axios";


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get(`/user/${this.props.match.params.userId}`).then(res => {
            this.setState({
                user: res.data
            })
            this.props.setData(res.data.first_name)
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            axios.get(`/user/${this.props.match.params.userId}`).then(res => {
                this.setState({
                    user: res.data
                })
                // this.props.title = data.first_name;
                this.props.setData(res.data.first_name)
            });
        }
    }

    render() {
        return (
            <div variant="body1" className="padding">
                <Typography>
                    <label className="label">First Name: </label>
                    <label className="value"> {this.state.user.first_name}</label>
                </Typography>
                <Typography>
                    <label className="label">Last Name: </label>
                    <label className="value"> {this.state.user.last_name}</label>
                </Typography>
                <Typography>
                    <label className="label">Location: </label>
                    <label className="value"> {this.state.user.location}</label>
                </Typography>
                <Typography>
                    <label className="label">Description: </label>
                    <label className="value">{this.state.user.description}</label>
                </Typography>
                <Typography>
                    <label className="label">Occupation: </label>
                    <label className="value"> {this.state.user.occupation}</label>
                </Typography>
                <Typography>
                    <label className="label">Photo Link: </label>
                    <label className="value">
                        <a href={'/photo-share.html#/photos/' + this.state.user._id}
                        >Click Here</a>
                    </label>
                </Typography>
            </div>
        );
    }
}

export default UserDetail;
