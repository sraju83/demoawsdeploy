import React, { Component } from "react";


//const EventHandler = (props) => { //type 1
// const EventHandler = (name, roll) => { //type 2
const EventHandler = (props) => { //type 3
  //console.log(props.name); //type 1
  const {name, roll} = props;
//   const {state1, state2} = this.state; /// used incase of clss component
  console.log(name, roll); //type 2
  return (
    <div>
      {/* <h3>{props.name}</h3>
      <h3>{props.roll}</h3> */}
    </div>
  );
};

export default EventHandler;
