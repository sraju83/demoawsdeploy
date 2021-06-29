import React, { Component } from "react";

class FragementDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h3>Fragement Demo</h3>
        <p> this is summary for fragemnt</p>
      </React.Fragment>
    );
  }
}

export default FragementDemo;
