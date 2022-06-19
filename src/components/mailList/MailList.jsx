import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mailContainer">
      <h1 className="mailTitle">Save time, save money</h1>
      <span className="desc">Sign up and we'ill send the best delas to you</span>
      <div className="inputContainer">
        <input type="text" placeholder="Enter your Email" />
        <button>Subscriber</button>
      </div>
    </div>
  );
};

export default MailList;
