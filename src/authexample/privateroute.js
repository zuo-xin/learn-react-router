import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import config from './config.js'

class PrivateRoute extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        const { component: Component } = this.props;
        return (
            <Route  render={() => (
                config.isAuthenticated?(
                    <Component  />):
                    (<Redirect to={{pathname:'/login',state:{from:this.props.location}
                    }}/>
                )
            )}/>
            
        )

    }
}

export default PrivateRoute