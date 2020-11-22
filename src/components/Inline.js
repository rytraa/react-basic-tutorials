import React from 'react'

function Inline() {

    const heading = {
        borderBottom: '2px solid blue',
        paddingBottom: '5px',
        color:'cornflowerblue',
        fontSize:'300%',
        textShadow:'2px 2px 3px black',
        width:'100%'

    }
    
    return (
        <div>
            <h2 style={heading}>Inline</h2>
        </div>
    )
}

export default Inline
