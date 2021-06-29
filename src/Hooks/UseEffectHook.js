import React, { useState, useEffect } from "react";

function UseEffectHook(props) {
  const [countinc, setIncCount] = useState(0); //name is value and setName is funcation call at click event
  const [countdesc, setDesCount] = useState(50); //name is value and setName is funcation call at click event

  //note useState functon return two valriable 1 is variable and another is funcation
  //this abover funation can also be written as
  // const nameState = useState(Marry); //this array will have 2 parts
  // <h1> {nameState[0]} </h1>
  // nameState[1]("Gandhi"); //look carefully how the valiable is assigned using the fucnation.

  function onChangeIncreaseHandler(e) {
    //setName(e.target.value);
    setIncCount(countinc + 1);
  }

  function onChangeDecreaseHandler(e) {
    //setName(e.target.value);
    setDesCount(countdesc - 1);
  }

  useEffect(()=>{
      console.log("Use Effect Called") //check logs and htlp to see some time cause the slowness to the system.
  },[countinc])  //second paramter help to check if there is change then it will call elas now call
  //here [countinc] help to STOP THE CALL, ANS IT WILL ONLY CALL FOR DECREASED

  return (
    <React.Fragment>
      <h3>Increase : {countinc}</h3>
      <h3>Decrease : {countdesc}</h3>
      <button type="botton" onClick={onChangeIncreaseHandler}>
        Increase
      </button>
      <button type="botton" onClick={onChangeDecreaseHandler}>
        Decrease
      </button>
      <br />
    </React.Fragment>
  );
}

export default UseEffectHook;
