//rce
//Used for Child to talk to the parent
import React, { Component } from "react";
import ChildComponet from "./ChildComponet";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

//    //Type 1 only showing the click button 
//   greetParent() {
//     //alert(`hello ${this.state.parentName} `) //type 1
//     //console.log("test");
//   }

  //Type 2 with passing child as name in event
  greetParent(childName) {
    alert(`hello ${this.state.parentName} from ${childName}`) //type 2
    //console.log("test");
  }

  render() {
    return (
      <div>
        <ChildComponet greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
