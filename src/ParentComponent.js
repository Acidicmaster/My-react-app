import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


 class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentName: 'Juliana'
    }
    this.greetParent = this.greetParent.bind(this)
}
greetParent(children){
    alert(`Hello ${this.state.parentName} from ${children}` )
}

    render() {
        return (
            <div>
                <ChildComponent greetHandler= {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
