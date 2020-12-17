import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);    
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      age: 0,
      gender: 'Male',
      genders: ['Male', 'Female']
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      age: this.state.age,
      gender: this.state.gender
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/user';
  }

  render() {
    return (
      <div>
        <h3>Create Patient</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Patient Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Age: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
                />
          </div>
          <div className="form-group"> 
            <label>Gender: </label>
            <select 
                required
                className="form-control"
                value={this.state.gender}
                onChange={this.onChangeGender}>
                {
                  this.state.genders.map(function(gender) {
                    return <option 
                      key={gender}
                      value={gender}>{gender}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}