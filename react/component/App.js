import React, {Component} from 'react'

class App extends Component{
    render(){
        return (
            <div>
                <h2> This is app </h2>
                {this.props.child}
            </div>

        )
    }
}

export default App