//rfce
import React from 'react'

function Person({id,person }) {
    return (
        <div>
            <h3>  
                     Index {person.id} . I am {person.name} having age {person.age} and my skill are {person.skill}
            </h3>
        </div>
    )
}

export default Person
