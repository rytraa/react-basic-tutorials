import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             clan:'Uchiha'
        }
    }

    handleUserName = (event) => {
        this.setState({
            username:event.target.value
        });
    }
    
    handleComments = (event) => {
        this.setState({
            comments:event.target.value
        });
    }

    handleClan = (event) => {
        this.setState({
            clan:event.target.value
        });
    }

    handleSubmit = (event) => {
        alert(`${this.state.username.toUpperCase()} of clan ${this.state.clan} commented, "${this.state.comments}".`);
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text"value={this.state.username} onChange={this.handleUserName} />
                </div>

                <div>
                    <label>Comments: </label>
                    <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
                </div>

                <div>
                    <label>Select your clan: </label>
                    <select value={this.state.clan} onChange={this.handleClan}>
                        <option value='Uzumaki'>Uzumaki</option>
                        <option value='Uchiha'>Uchiha</option>
                        <option value='Hyuga'>Hyuga</option>
                    </select>
                </div>

                <button type='submit'>Submit</button>
            </form>
            )
        }
    }
    
    export default Form
    