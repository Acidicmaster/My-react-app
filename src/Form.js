import React, { Component } from 'react'

export class Form extends Component {

constructor(props) {
    super(props)

    this.state = {
         firstName : '',
         comment : '',
         car : 'volvo'
    }
}

handleFirstNameChange = event => {
    this.setState({
        firstName: event.target.value
    })
}
handleCommentChange = event => {
    this.setState({
        comment : event.target.value

    })
}
handleCarChange = event =>{
    this.setState({
        car : event.target.value
    })
}
handleSubmit = event =>{
    alert(`${this.state.firstName}  ${this.state.comment} ${this.state.car}`)
    event.preventDefault()
}


    render() {
        return (

        <form onSubmit={this.handleSubmit}>

            <div>
                <label >First name:</label>
                <input type="text" 
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}/>

            </div>
            <div>
                <label> Comments </label>
                <textarea  value={this.state.comment}
                onChange={this.handleCommentChange}
                ></textarea>
            </div>
            <div>
            <label>Choose a car:</label>
                <select value={this.state.car}  onChange={this.handleCarChange} >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select>
            </div>
            <button type="submit"> Submit</button>
        </form>
        )
    }
}

export default Form
