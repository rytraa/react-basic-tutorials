import React from 'react'

function PersonData({key,person}) {
    return (
        <div>
            <h2><b>{person.name}</b></h2>
            <p>a.k.a {person.alias}</p>
            <p>vs. {person.nemesis}</p>
        </div>
    )
}

export default PersonData
