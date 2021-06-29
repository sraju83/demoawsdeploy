//import React from "react"; //template rfce
//normal funation
// function FunctionClick() {
//   function clickHandler() {
//     console.log("button clicked");
//   }

//   return (
//     <div>
//         {/* //dont use the clickHandler() */}
//         <button onClick={clickHandler}>Submit</button>

//     </div>
//   );
// }

// export default FunctionClick;

//Class component

import React, { Component } from "react"; //rcc install by

// In class component
// 1. use this.clickHandler
// 2. Just use the FunctionClick() (without funcation key word)

export default class FunctionClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    this.clickHandler = this.clickHandler.bind(this); //(Type2)
  }
  // clickHandler() {
  //     console.log("button clicked");
  // }

  //arrow function
  clickHandler = () => {
    console.log("use of arrow funcation");
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.clickHandler}>Submit (Type1)</button>  */}
        {/* ///use of arrow funcation always use the curlly bracket () => this.clickHandler()*/}
        <button onClick={this.clickHandler.bind(this)}>
          {" "}
          Binding Function Click(Type3)
        </button>
        {/* <button onClick={() => this.clickHandler()}> Arrow Function Click(Type2, best)</button> */}
      </div>
    );
  }
}
