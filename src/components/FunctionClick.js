import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("The button was clicked.")
    }

    return (
        <div>
            {/* Event Handler are functions and not function calls.Hence do not add parentheses */}
            <h3>Function Click:-</h3>
            <button onClick = {clickHandler}>Click Me.</button>  
        </div>
    );
}
    
export default FunctionClick
