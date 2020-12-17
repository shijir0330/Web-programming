import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientname = this.onChangePatientname.bind(this);
    this.onChangeDiagnosis = this.onChangeDiagnosis.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      patientname: '',
      diagnosis: '',
      description: '',
      date: new Date(),
      patients: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            patients: response.data.map(patient => patient.username),
            patientname: response.data[0].patientname
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangePatientname(e) {
    this.setState({
      patientname: e.target.value
    })
  }

  onChangeDiagnosis(e) {
    this.setState({
      diagnosis: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const diagnosis = {
      patientname: this.state.patientname,
      diagnosis: this.state.diagnosis,
      description: this.state.description,
      date: this.state.date
    }

    console.log(diagnosis);

    axios.post('http://localhost:5000/exercises/add', diagnosis)
      .then(res => console.log(res.data));

    window.location = '/diagnosis';
  }

  render() {
    return (
    <div>
      <h3>Create Diagnosis</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Patient Name: </label>
          <select 
              required
              className="form-control"
              value={this.state.patientname}
              onChange={this.onChangePatientname}>
              {
                this.state.patients.map(function(patient) {
                  return <option 
                    key={patient}
                    value={patient}>{patient}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Diagnosis: </label>
          <input 
              required
              type="text" 
              className="form-control"
              value={this.state.diagnosis}
              onChange={this.onChangeDiagnosis}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}