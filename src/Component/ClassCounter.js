//rce

import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Counter{this.state.counter}
        </button>
      </div>
    );
  }
}

// this help to change the state of the variable
//setState is the API method provided with the library so that the user is able to define and manipulate state over time.
//    this.setState({counter : counter +1} )
//    this.setState({email:true})
//    this.setState()
//    //this.state.counter = "200"//wrong way
//    this.setState({counter: 100})
//wrong
// this.setState({
//     counter : this.state.counter + this.props.counter,
// })

// //correct
// this.setState((state,props) => ({
//     counter : this.state.counter + this.props.counter,
// }))

export default ClassCounter;
