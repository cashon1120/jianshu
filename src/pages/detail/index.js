import React,{ PureComponent } from 'react'
import { DetailWrapper, DetailInfo } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
class Detail extends PureComponent {
    render () {
        const { data} = this.props
        return (
            <DetailWrapper>
                <h1>{data.get('title')}</h1>
                <DetailInfo>2018.08.08 11:03 字数 2018 阅读 594评论 1喜欢 25</DetailInfo>
                <img src={data.get('imgUrl')} alt=""/>
                <div className="detail-content" dangerouslySetInnerHTML={{__html:data.get('content')}}></div>
            </DetailWrapper>
        )
    } 
    componentDidMount () {
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapState = (state) => ({
    data:state.getIn(['detail','data'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail));