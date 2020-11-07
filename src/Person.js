import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h2>
                 i am {person.name} and my age is {person.age}
                 </h2>
        </div>
    )
}
