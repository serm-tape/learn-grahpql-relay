import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {render} from 'react-dom'

import {App, Hello} from './component'

class Root extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route path='/' component={App} />
                    <Route exact path='/' component={Hello} />
                    <Route exact path='/hello' component={Hello} />
                </div>
            </Router>
        )
    }
}

render(<Root />, document.getElementById('app'))