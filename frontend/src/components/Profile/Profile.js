import React, { Component } from "react"; 
import "./Profile.css";
import UserInfo from "./UserInfo.js";
import ProgressGraph from "./ProgressGraph.js";
import CaloriesGraph from "./CaloriesGraph.js";
import MuscleWorked from "./MuscleWorked"

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <UserInfo />
        <ProgressGraph />
        <CaloriesGraph />
        <MuscleWorked />
      </div>
    );
  }
}
