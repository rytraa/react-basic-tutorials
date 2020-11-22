import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    
    added(){
        // this.setState({
        //     count: this.state.count + 1
        // }, function(){
        //     //callback
        //     console.log('Count(added): ' + this.state.count);
        // });

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    addfive(){
        this.added()
        this.added()
        this.added()
        this.added()
        this.added()
    }

    diffed(){
        this.setState({
            count: this.state.count -1
        }, function(){
            //callback
            console.log('Count(subtracted): ' + this.state.count);
        });

        // this.state.count -=1;
        // This wont re-render in the UI, so cant be used.
    }
    
    
    render() {
        return (
            <div>
            <h2>Count: {this.state.count}</h2> 
            <button onClick={() => {this.addfive()}}>Add +1</button>
            <button onClick={() => {this.diffed()}}>Subtract -1</button>
            </div>
            )
        }
    }
    
    export default Counter
    