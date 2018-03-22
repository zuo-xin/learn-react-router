import React from 'react'
import {BrowserRouter,Route,Link,Redirect,withRouter} from 'react-router-dom'

import Authbutton from './authbutton.js'
import Public from './public.js'
import Login from './login.js'
import Protected from './protected.js'
import PrivateRoute from './privateRoute.js'
import config from  './config.js'
  
class AuthExample extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <div>
                <Authbutton />
                <ul>
                    <li><Link to="/public">Public page</Link></li>
                    <li><Link to="/protected">Protected page</Link></li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
                </div>
            </BrowserRouter>
            
        )
    }
}

export default AuthExample
