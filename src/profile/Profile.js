import React, { Component } from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profileData">
        <div>Name : {props.name} </div>
        <div>Profession : {props.profession} </div>
        <div>Bio : {props.bio} </div>
      </div>
      <div style={{ width: 300 }}>{props.children}</div>
    </div>
  );
}

export default Profile;
