import React from 'react';

// function Greet (){
//     return <h1>Hello World!1</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} {", aka " + props.alias} </h1>
            {props.children}
        </div>
        );
    }
    
    export default Greet;