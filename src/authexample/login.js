import React from 'react'
import {Redirect} from 'react-router-dom'
import config from './config.js'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            redirectToReferrer:false
        }
    }

    login(){
        config.authenicate(() =>{
            this.setState({
                redirectToReferrer:true
            })
        })
    }
    render(){
        
        const {from} = this.props.location.state.pathname?this.props.location.state:{from:{ pathname:'/'}}
        const {redirectToReferrer} = this.state
        if(redirectToReferrer){
            return (
                <Redirect to={from} />
            )
        }
        return(
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login.bind(this)}>Log in</button>
            </div>
        )
    }
}

export default Login
  
