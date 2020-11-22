import React from 'react'

const Hello = () => {
    //without JSX

    return React.createElement('div',null,
    React.createElement('h3',{style: {color:'coral'}, className:'dummyClass'},`This is the home page.` )
    );
}

export default Hello