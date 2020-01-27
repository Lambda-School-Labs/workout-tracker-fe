import React, { Component } from "react";
import "../Routines/Routines.css";

import { getStatus } from "../../actions/index";
import { connect } from "react-redux";
import MemberProfile from "./MemberProfile";

class Userinfo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getStatus();
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else
      return (
        <div>
          {console.log("status is ", this.props.status)}

          {this.props.status.map(a => (
            <div className="user-info" key={a.id}>
              <MemberProfile />
              <div className="user-info-wrapper" key={a.member_id}>
                <h3>Weight: {a.weight} </h3>
                <h3>Bench Max: {a.bench_max}</h3>
                <h3>Squat Max: {a.squat_max}</h3>
                <h3>Height: {a.height}</h3>
                <h3>Body Mass Percentage: {a.bmi}</h3>
                <h3>Mile Time: {a.mile_time}</h3>
              </div>
              <div className="see-more">
                <a className="see-more-button" href="profile-info">
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>
      );
  }
}
const mapStateToProps = state => {
  console.log("this is mapstatetoprops stte ", state);
  return {
    status: state.userInfo.status,
    weight: state.weight,
    height: state.height,
    bmi: state.bmi,
    bench_max: state.bench_max,
    squat_max: state.squat_max,
    mile_time: state.mile_time,
    date: state.date,
    loading: state.loading
  };
};
export default connect(mapStateToProps, { getStatus })(Userinfo);
