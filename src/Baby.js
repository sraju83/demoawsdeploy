import React from "react";
import PT from "prop-types";
import WelcomeClassComponent from "./WelcomeClassComponent";
import  Counter from "./Counter";

///this is the component class just like funcation, use this when you used the lifecyle hook, or methods
/// funcation are only used to show the states, this is only set in the component
// class can only have the state, it can have private internal state help to define the componet
class Baby extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Devesh" };
  }
  render() {
    return (
      <div>
        <h2>
          Hi, I am a {this.props.name}! and the State is : {this.state.name} 
          {/* class will have this but not funcation */}
        </h2>
        <WelcomeClassComponent />
        <Counter />
      </div>
    );
  }
}

Baby.propTypes = {
  optionalSymbol: PT.string,
};

export default Baby;
