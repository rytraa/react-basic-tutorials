import React from 'react'

function NameList() {
    const names = ['Bruce', 'Diana', 'Clark']
    return (
        <div>
            {
                names.map((name) => 
                <h3>{name}</h3>
                )
            }
        </div>
    )
}

export default NameList
