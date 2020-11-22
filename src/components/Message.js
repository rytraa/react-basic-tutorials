import React, { Component } from 'react'

class Message extends Component{
    
    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor',
            subs: 'Subscribe :D',
            subsie : false
        }
    }
    
    changeMessage(){
        if(this.state.subsie == false){
            this.setState({
                message:"Subscribed.Thankyou!",
                subs:'Unsubscribe :(',
                subsie: true
            });
        }else{
            this.setState({
                message:"Do subscribe!!!",
                subs:'Subscribe :D',
                subsie: false
            });
        }
        
    }
    
    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>{this.state.subs}</button>
            </div>
            );
        }
    }
    
    export default Message