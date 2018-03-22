import React from 'react'

import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom'
import Home from './home.js'
import NoMatch from './nomatch.js'
import WillMatch from './willmatch.js'

class NoMatchExample extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/old-match">Old Match,to be redirectd</Link></li>
                        <li><Link to="/will-match">Will Match</Link></li>
                        <li><Link to="/will-not-match">Will Not Match</Link></li>
                        <li><Link to="/also/will/not/match">Also will not match</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Redirect from="/old-match" to="/will-match"></Redirect>
                        <Route path="/will-match" component={WillMatch}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
        
    }
}

export default NoMatchExample