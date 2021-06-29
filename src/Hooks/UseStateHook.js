import React, { useState } from "react";

function UseStateHook(props) {
  const [name, setName] = useState("Marry"); //name is value and setName is funcation call at click event
  const [count, setCount] = useState("100"); //name is value and setName is funcation call at click event

  //note useState functon return two valriable 1 is variable and another is funcation
  //this abover funation can also be written as 
  // const nameState = useState(Marry); //this array will have 2 parts
  // <h1> {nameState[0]} </h1>
  // nameState[1]("Gandhi"); //look carefully how the valiable is assigned using the fucnation.

  function onChangeNameHandler(e) {
    //setName(e.target.value);
    setName("MODO JI");
  }

  function onChangeNumberHandler(e) {
    //setName(e.target.value);
    var count = setCount(count + 100);
    console.log("testing" + count);
  }

  return (
    <React.Fragment>
      <h3>Name : {name}</h3>
      <h3>Count : {count}</h3>
      <button type="botton" onClick={onChangeNameHandler} >Name</button>
      Change Name
      <br />
      <button type="botton"  onClick={onChangeNumberHandler} >CountNumber</button>
      Change Number
      <br />
    </React.Fragment>
  );
}


export default UseStateHook;