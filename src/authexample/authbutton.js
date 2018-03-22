import React from 'react'
import config from './config.js'
import {withRouter} from 'react-router-dom'


class AuthButoon extends React.Component{
    render(){
        const {match,location,history} = this.props
        // let flag = config.isAuthenticated;
        // let element;
        // if(flag){
        //     element = <p>Welcome! <button onClick={()=>{
        //         config.signout(()=>history.push('/'))
        //     }}>Sign out</button></p>
        // }else{
        //     element = <p>You are not logged</p>
        // }
        return (
            
            config.isAuthenticated? <p>Welcome! <button onClick={()=>{
                config.signout(()=>history.push('/'))
            }}>Sign out</button></p>:<p>You are not logged</p>
        )
    }
}

const AuthButoonWithRouter = withRouter(AuthButoon)

export default AuthButoonWithRouter