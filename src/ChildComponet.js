//rce
import React from 'react'


function ChildComponet(props) {
    return (
        <div>
            {/* //Type 1 */}
            {/* <button onClick={props.greetHandler()}>Greet Parent</button> */}
            {/* //Type 2 */}
            <button onClick={ () => props.greetHandler('child')  }>Greet Parent</button> 
        </div>
    )
}

export default ChildComponet;
