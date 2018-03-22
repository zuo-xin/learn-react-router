import React from 'react'

class NoMatch extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {location} = this.props;
        return(
            <div>
                <h3>No Match for {location.pathname}</h3>
            </div>
        )
    }
}

export default NoMatch