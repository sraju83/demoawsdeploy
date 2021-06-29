import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
      this.setState ({ //this helps to change the state
          count : this.state.count +1
      }, 
      ()=> {
          console.log("callback avlue",this.state.count)
      })
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <h3>count1 - {this.state.count}</h3>
        <button onClick={() => this.increment()}>Incremeent</button>
      </div>
    );
  }
}



export default Counter;
