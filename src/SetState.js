import React from "react";

class SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "devesh",
          };
    }
    
    componentWillMount(){
        console.log("name"+this.state.name)
        this.setState((state,props) => ({name : "elsisha"}))
    }

    
    render() { 
        console.log(this.state.name)
        return (  
            <h1>Name : {this.state.name}</h1>
        );
    }
}
 
export default SetState;

// // Wrong
// this.state.comment = 'Hello';

// // Correct
// this.setState({comment: 'Hello'});

// // Wrong
// this.setState({
//     counter: this.state.counter + this.props.increment,
//   });

//   // Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));

//   // Correct
// this.setState(function(state, props) {
//     return {
//       counter: state.counter + props.increment
//     };
//   });