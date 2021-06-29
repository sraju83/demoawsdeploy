import React, { Component } from "react";

//ccce - class with constructre

export default class CallAPI2 extends React.Component {
  //ccce - class with constructre
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://localhost:44310/weatherforecast";
    const response = await fetch(url, { mode: "no-cors" });
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false }); //big mistake , loading: false
  }

  render() {
    if (this.state.loading) {
      return <div>loading</div>;
    }

    if (!this.state.person) {
      return <div>didn't get the person</div>;
    }

    return (
      <div>
        <div>{this.state.person.summary}</div>
      </div>
    );
  }
}
