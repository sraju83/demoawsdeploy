import React, { Component } from "react";
import axios from "axios"; //help in calling the webservices
class PostForm extends Component {
  constructor(props) {
    console.log("1");
    super(props);
    this.state = {
      //1
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    console.log("3");
    this.setState({ [e.target.name]: e.target.value }); //3 ANY TIME CHANEG IN THE TEXTBOX WILL SET VALUE
  };

  submitHandler = (e) => {
      alert(`${this.state.userId} ${this.state.title} ${this.state.body}` )
    console.log("4");
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state) //4
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId} //2
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
