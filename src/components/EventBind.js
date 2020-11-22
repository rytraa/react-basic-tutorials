import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Hello!'
        }
        this.clickme = this.clickme.bind(this)
    }
    
    clickme(){
        this.setState({
            message:'Clicked'
        })
    }
    
    render() {
        return (
            <div>
            <h3>{this.state.message}</h3>
            <button onClick={this.clickme}> Click Me!!!!</button>          
            </div>
            );
        }
    }
    
    export default EventBind
    