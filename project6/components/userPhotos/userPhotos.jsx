import React from 'react';
import axios from 'axios';
import {
    Typography, Grid
} from '@material-ui/core';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: []
        }
    }

    componentDidMount() {
        axios.get(`/photosOfUser/${this.props.match.params.userId}`).then(res => {
            this.setState({
                infos: res.data
            })
        });
        axios.get(`/user/${this.props.match.params.userId}`).then(res => {
            this.props.setData("Photos of " + res.data.first_name)
        });
    }

    render() {
        return (
            <div variant="body1">
                {this.state.infos.map((info, index) => (
                    <Grid key={info._id} container spacing={3}>
                        <Grid item xs={12}>
                            <Typography>
                                {index + 1}. Created Date: {info.date_time.substring(0, 16).replace("T", " ")}
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <img src={'images/' + info.file_name} className="photo" alt=""/>
                        </Grid>
                        <Grid item sm={8}>
                            <div>
                                <Typography>Comments:</Typography>
                                {info.comments.length ?
                                    info.comments.map(comment => (
                                        <Typography key={comment._id} className="comments">
                                            <a href={'/photo-share.html#/users/' + comment.user._id}
                                            >{comment.user.first_name + " " + comment.user.last_name}</a>&nbsp;{comment.date_time.substring(0, 16).replace("T", " ")}<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;{comment.comment}
                                        </Typography>
                                    ))
                                    : <Typography className="comments">None</Typography>
                                }
                            </div>
                        </Grid>
                    </Grid>
                ))}

                {/*This should be the UserPhotos view of the PhotoShare app. Since*/}
                {/*it is invoked from React Router the params from the route will be*/}
                {/*in property match. So this should show details of user:*/}
                {/*{this.props.match.params.userId}. You can fetch the model for the user from*/}
                {/*window.cs142models.photoOfUserModel(userId):*/}
                {/*<Typography variant="caption">*/}
                {/*    {JSON.stringify(window.cs142models.photoOfUserModel(this.props.match.params.userId))}*/}
                {/*</Typography>*/}
            </div>

        );
    }
}

export default UserPhotos;
