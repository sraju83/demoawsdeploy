import React, { Component } from "react"; //rce

export class UserGreeting extends Component {
  constructor(props) {
    //snippit rconts
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

//   //type 1 - if/else
//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>Welcome Devesh</div>;
//     } else {
//       return <div>Welcome Guest</div>;
//     }
 
//     return (
//       <div>
//         <div> Welcome Devesh</div>
//         <div> Welcome Guest</div>
//       </div>
//     );

//     //type 2 - Elemenet variable
//     render() {
//         let message;
//         if (this.state.isLoggedIn) {
//             message = <div>Welcome Devesh</div>;
//         } else {
//             message = <div>Welcome Guest</div>;
//         }
    
//         return <div>{message}</div>
//   }

    // //type 3 - Ternary Conditional operator
    // render(){

    //     return this.state.isLoggedIn ?
    //     <div>Welcome Devesh</div> :
    //     <div>Welcome Guest</div>

    // }

    //type 4 - Short circut operator 
    render(){
        return this.state.isLoggedIn && <div>Welcome Devesh</div>
    }

}

export default UserGreeting;
