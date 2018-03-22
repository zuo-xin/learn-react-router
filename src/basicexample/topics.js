import React from 'react'
import {Link,Route} from 'react-router-dom'
import Topic from './topic.js'


class Topics extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {match} = this.props;
        return(
            <div>
                <h2>主题列表</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>使用React渲染</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>组件</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>属性v. 状态</Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic} />
                <Route exact path={`${match.url}`} render={() =>(
                    <h3>请选择一个主题</h3>
                )}/>
            </div>
        )
    }
}

export default Topics