import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import {TheamContext, LocaleContext} from './Context' //contest 


//Funcation example 
// export default function HooksBefore(props) {
//     return(
//         <section>
//             <div>
//                 {props.name}
//             </div>
//         </section>
//     )
// }

// //Convert fucnation to class componetn complex projec does it 
// class HooksBefore extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             name: "marry",
//             Surname: "Aryan",
//          }
//          this.onChangeHandler = this.onChangeHandler.bind(this);
//     }

//     onChangeHandler(e){
//         this.setState({
//             name: e.target.value
//         }
//         )
//     }

//     render() { 
//         return ( 
//                 <div>
//                     <input value={this.state.name} onChange={this.onChangeHandler}/><br/>
//                     <label for="female">{this.state.name}</label>
//                 </div>
//          )
//     }
// }
 
//hook example 

// function HooksBefore(props) {
//     const [name, setName] = useState('Marry')

//     function onChangeHandler(e){
//         setName(e.target.value);
//     }

//     return ( 
//         <div>
//             <input value={name} onChange={onChangeHandler}/><br/>
//             <label >{name}</label>
//         </div>
//     )
// }

function HooksBefore(props) {
    const [name, setName] = useState('Marry') //name is variable and setName is function
    const [surname, setSurName] = useState('Srivastava') //name is variable and setName is function



    function onChangeHandler(e){
        setName(e.target.value);
    }

    function onChangeSurNameHandler(e){
        setSurName(e.target.value);
    }

    return ( 
        
        <Container>
            <Row lable="Name">
                <input value={name} onChange={onChangeHandler}/>  
                <label >{name}</label> <br/>
            </Row>
            <Row lable="SurName">
                <input value={surname} onChange={onChangeSurNameHandler}/>  
                <label >{surname}</label>
            </Row>
        </Container>
           
    )
}

export default HooksBefore;
//Now change since we need to make it dynamicall we need to convert funcation into Class Componet