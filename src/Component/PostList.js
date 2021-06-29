import React, { Component } from "react"; //rce
import axios from "axios";
export class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //step1
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data }); //step2
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "error retriving date" });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title} </div>) //step3
          : null}
        {errorMessage ? <div> {errorMessage} </div> : null}
      </div>
    );
  }
}

export default PostList;
