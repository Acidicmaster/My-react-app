import React from 'react'

function NameList() {

    const names = ['Kenn','neth','dianna','Teemy']
    return (
        <div>
            {/* <h1>{names[0]}</h1> 
            <h1>{names[1]}</h1> 
            <h1>{names[2]}</h1> 
            <h1>{names[3]}</h1> */}

            {
            names.map(name => <h2>{name}</h2>)

            }
        </div>
    )
}

export default NameList
