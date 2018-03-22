import React from 'react'
import {Route,Link} from 'react-router-dom'

import config from './config.js'
/**
 * <Person match={{params:{id:0},url:""}} />
 */
class Person extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {match} = this.props;
        const person = config(match.params.id)
        return (
            <div>
                <h3>{person.name}'s friends</h3>
                <ul>
                    {person.friends.map(id =>(
                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>{config(id).name}</Link>
                        </li>
                    ))}
                </ul>
                <Route path={`${match.url}/:id`} component={Person} />
            </div>
        )
    }
}

export default Person