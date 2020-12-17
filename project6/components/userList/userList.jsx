import React from 'react';
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    Badge,
}
    from '@material-ui/core';
import './userList.css';
import axios from "axios";
// import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        // this.users = window.cs142models.userListModel();
        // this.users = [];
        // console.log(this.users)
        // this.ListItemLink = this.ListItemLink.bind(this);
        this.getPhotoCount = this.getPhotoCount.bind(this);
    }

    componentDidMount() {
        axios.get('/user/list').then(res => {
            var users_ = res.data.map(value => {
                var photo_count = 0;
                axios.get(`/photosOfUser/${value._id}`).then(comment => {
                    photo_count = comment.data.length
                }).catch();
                return {
                    _id: value._id,
                    first_name: value.first_name,
                    last_name: value.last_name,
                    photo_count: photo_count
                }
            })
            this.setState({
                users: users_
            })
        });
    }

    render() {
        return (
            <div>
                <Typography variant="body1">
                    
                </Typography>
                <List component="nav">
                    {this.state.users.map((user, index) => (
                        <div key={user._id}>
                            <ListItem button component="a" href={'/photo-share.html#/users/' + user._id}>
                                <ListItemText primary={index + 1 + '. ' + user.first_name + ' ' + user.last_name}/>
                                <Badge color="primary" badgeContent={user.photo_count}>

                                </Badge>
                            </ListItem>
                            <Divider/>
                        </div>
                    ))}
                </List>
            </div>

        );
    }
}

export default UserList;
