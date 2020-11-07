import React, { Component } from 'react'

class EventBind extends Component {
constructor(props){
    super(props)
    this.state = {
        message : 'Hello'
    }
  //  this.clickHander = this.clickHander.bind(this)
}
// clickHander(){
//     this.setState({
//         message : 'Goodbye'
//     })
// }
clickHander = ()=>{
    this.setState({
        message : 'Goodbye'
    })
}

    render() {


        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHander.bind(this)}> Bind</button> */}
                <button onClick={this.clickHander}> Bind</button>
            </div>
        )
    }
}

export default EventBind
