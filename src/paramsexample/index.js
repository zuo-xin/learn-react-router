import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Child from './child.js'

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <h2>账号</h2>
                    <ul>
                        <li><Link to="/react-router">React-router</Link></li>
                        <li><Link to="/leoashin">LeoAshin</Link></li>
                        <li><Link to="/justjavac?aaa=aaa&bbb=bbb">justjavac</Link></li>
                        <li><Link to="/reacttraining">React training</Link></li>                  
                    </ul>
                    <Route exact path="/" render={() =>(
                        <h2>select a account</h2>
                    )}></Route>
                    
                    <Route path="/:id" component={Child}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App