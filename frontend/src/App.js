import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import "./App.css";
import Graphs from "./components/Profile/Graphs/Graphs";
import Profile from "./components/Profile/Profile";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import AutocompletePage from "./components/AutoCompletePage";
import Routines from "./components/Routines/Routines.js";
import AddRoutine from "./components/Routines/AddRoutine";
import AddId from "./components/Routines/AddId";
import ExerciseRecords from "./components/Profile/Record-workout/ExerciseRecords";
import RoutineRecords from "./components/Profile/Record-workout/RoutineRecords";
import AddExercise from "./components/Routines/SearchBar";
import DisplayRoutines from "./components/Routines/DisplayRoutines";
import FriendList from "./components/Routines/FriendList";
import SearchBar from "./components/Routines/SearchBar";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <Router>
        <Router>
          {/* Nav Bar */}
          <div></div>

          <Switch>
            <Route exact path="/" component={FullPageIntroWithFixedNavbar} />
            <Route
              path="/graphs"
              exact
              render={props => <Graphs {...props} />}
            />
            <Route
              path="/profile"
              exact
              render={props => <Profile {...props} />}
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/add-routine" component={AddRoutine} />
            <Route exact path="/add-id" component={AddId} />
            <Route exact path="/exercise-records" component={ExerciseRecords} />
            <Route exact path="/routine-records" component={RoutineRecords} />
            <Route exact path="/add-exercise/:id" component={SearchBar} />
            <Route exact path="/display-routine" component={DisplayRoutines} />
            <Route exact path="/form" component={FriendList} />
          </Switch>
        </Router>
      </Router>
    </div>
  );
}

export default App;
