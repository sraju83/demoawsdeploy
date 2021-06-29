class Display extends React.Component({ 

show(evt) {
    // code 
}, 

render() { 
        // Render the div with an onClick prop (value is a function) 
        return ( 
        <div onClick={this.show}>Click Me!</div>

        ); 
    }
});