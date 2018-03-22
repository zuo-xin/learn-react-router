import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Home from './home.js'
import About from './about.js'
import Topics from './topics.js'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/topics">主题列表</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                </div>
            
            </BrowserRouter>
        )
    }
}
export default App