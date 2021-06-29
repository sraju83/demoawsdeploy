import React, { Component } from "react";

//ccce - class with constructre

export default class CallAPI extends React.Component {
  //ccce - class with constructre
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
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
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} />
      </div>
    );
  }
}
