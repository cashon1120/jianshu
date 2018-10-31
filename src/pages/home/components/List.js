import React, {PureComponent} from 'react'
import { ListWrapper, ListItem } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render() {
    const {list, loadMore, page} = this.props
    return (
      <ListWrapper>
        {list.map((item,index)=>{
          return (
            <ListItem key={index}>
              <div className={item.get('imgUrl')?'content':''}>
              <Link to={'/detail/'+item.get('id')} className='title'>{item.get('title')}</Link>
                <p className="abstract">
                  {item.get('abstract')}
                </p>
                <div className="meta">
                  <a className="nickname" target="_blank" href="/u/e75a0b4c2920">{item.get('writer')}</a>
                  <a target="_blank" href="/p/be161991ea6e#comments">
                    <i className="iconfont">&#xe640;</i>
                    {item.get('msgCount')}
                  </a>
                  <span>
                    <i className="iconfont">&#xe612;</i>
                    {item.get('love')}</span>
                </div>
              </div>
              {item.get('imgUrl') ? ( <img src={item.get('imgUrl')} alt=""/>) : ''}
            </ListItem>
          )
        })}
        <div onClick={() => loadMore(page)} className="load-more">阅读更多</div>
      </ListWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list:state.getIn(['home','list']),
    page:state.getIn(['home','page'])
  }
}
const mapDispatch = (dispatch) => (
  {
    loadMore (page){
      dispatch(actionCreators.loadMore(page))
    }
  }
)
export default connect(mapState,mapDispatch)(List)