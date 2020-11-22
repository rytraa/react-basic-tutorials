import React, { Component } from 'react'

class ClassClick extends Component {
    clickhandler(){
        console.log("Class click button clicked.")
    }
    render() {
        return (
            <div>
                <h3>Class Click:-</h3>
                <button onClick={this.clickhandler}>Click Me.</button>  
            </div>
        )
    }
}

export default ClassClick
