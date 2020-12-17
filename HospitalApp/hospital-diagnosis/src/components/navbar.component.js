import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Hospital</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/diagnosis" className="nav-link">Diagnoses</Link>
          </li>
          <li className="navbar-item">
          <Link to="/diagnosis/create" className="nav-link">Create Diagnosis</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Patients</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user/create" className="nav-link">Register Patient</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}