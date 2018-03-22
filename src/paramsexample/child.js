import React from 'react'

class Child extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {match,location} = this.props
        console.log(location)
        return (
            <div>
                <h3>ID：{match.params.id}</h3>
            </div>
        )
    }
}

export default Child