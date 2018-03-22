import React from 'react'

class Topic extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {match} = this.props;
        console.log(this.props)
        return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )
    }
}

export default Topic