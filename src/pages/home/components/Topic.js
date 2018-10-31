import React,{ PureComponent } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Topic extends PureComponent {
    render () {
       
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item,index)=>{
                    return (
                        <Link key={item.get('id')} to="/" >
                            <TopicItem>
                                <img 
                                alt=""
                                src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        </Link>
                    )
                })}
               <Link to="/">
                    <TopicItem style={{paddingLeft:'10px',border:'0',background:'none'}}>
                        更多热门专题>
                    </TopicItem>
                </Link>
            </TopicWrapper>
        )
    }
}
const mapState = (state) => {
    return {
        topicList:state.getIn(['home','topicList'])
    }
}

export default connect(mapState,null)(Topic)