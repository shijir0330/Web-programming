import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import UserList from "./components/patient-list.component";
import EditUser from "./components/edit-user.component";
import Home from "./components/home.component";
import NotFound404 from "./components/error404.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/diagnosis" exact component={ExercisesList} />
          <Route path="/diagnosis/create" component={CreateExercise} />
          <Route path="/user" exact component={UserList} />
          <Route path="/user/create" component={CreateUser} />
          <Route path="/user/edit/:id" component={EditUser} />
          <Route path='/*' exact={true} component={NotFound404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
