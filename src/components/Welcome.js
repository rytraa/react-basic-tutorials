import React, { Component } from  'react'

class Welcome extends Component{
    render(){
        return <h1>Welcome y'all to this application{", " + this.props.alias} </h1>
    }
}

export default Welcome