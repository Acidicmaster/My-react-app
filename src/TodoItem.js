import React from 'react';


const Hello = (props) => {
 return(
     <div>
         <h1>HEllo {props.name}</h1>
     </div>
 )

// return React.createElement('div', 
// {id: 'hello', className : 'Hello-class'}
// ,React.createElement('h1',
// null,
// 'Hello '))

}


export default Hello;