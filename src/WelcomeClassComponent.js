import React, { Component } from "react"; ///always R in React should be capital

class WelcomeClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome Visitor", //use of the state and we required this to used below
    };
  }

  changeMessage() {  /// this is how we can change the state with in the calls on click of the button
    this.setState({
      message: "thanks you for subscription",
    });
  }
  render() {
    return (
      <div className="dummayclass">
        <h3> This is Welcome Class Component with JSX: Hello Viswas </h3>
        <h2>  {this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
    // return React.createElement("div",
    //   {id:"hello", className:"dummayclass"},
    //   React.createElement("div",null,'Hello Viswas')
    // );
  }
}

export default WelcomeClassComponent;
