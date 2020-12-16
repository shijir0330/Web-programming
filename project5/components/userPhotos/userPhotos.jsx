import React from 'react';
import {
    Typography
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
        fetch(`/photosOfUser/${this.props.match.params.userId}`).then(response => response.json()).then(data => {
            this.setState({
                infos: data
            })
        });
        fetch(`/user/${this.props.match.params.userId}`).then(response => response.json()).then(data => {
            this.props.setData("Photos of " + data.first_name)
        });
    }

    render() {
        return (
            <div variant="body1">
                {this.state.infos.map((info, index) => (
                    <div key={info._id}>
                        {index + 1}. Created Date: {info.date_time}<br/>
                        <img src={'images/' + info.file_name} className="photo" alt=""/>
                        <br/>Comments:<br/>
                        {info.comments ?
                            info.comments.map(comment => (
                                <div key={comment._id}>
                                    <Typography className="comments">
                                        <a href={'/photo-share.html#/users/' + comment.user._id}
                                        >{comment.user.first_name + " " + comment.user.last_name}</a><br/>
                                        date: {comment.date_time}<br/>
                                        {comment.comment}
                                    </Typography>
                                </div>
                            ))
                            : <div className="comments">None</div>}
                    </div>
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
