import React, { Component } from 'react'

class EventBind extends Component {
constructor(props){
    super(props)
    this.state = {
        message : 'Hello'
    }
}
clickHander(){
    this.setState({
        message : 'Goodbye'
    })
}

    render() {


        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHander.bind(this)}> Bind</button>
            </div>
        )
    }
}

export default EventBind
