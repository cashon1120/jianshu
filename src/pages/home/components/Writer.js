import React, { PureComponent } from 'react'
import {WriterWrapper, WriterSwitch} from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Writer extends PureComponent {
  handleChangePage (){}
  setNum (num){
    return (num/1000).toFixed(1)+'k'
  }
  render() {
    return (
      <WriterWrapper>
        <div className="writer-title">
          推荐作者
          <WriterSwitch onClick={() => this.handleChangePage(this.spinIcon)}>
            <i ref={(icon) => { this.spinIcon = icon }}className="iconfont spin">&#xe786;</i> 
            换一批
          </WriterSwitch>
        </div>
        <ul className="writer-list">
          {this.props.writer.map((item,index)=>{
            return (
              <li key={index}>
                <Link to="/" className="avater"><img src={item.get('imgUrl')} alt="" /></Link>
                <Link className="follow" to="/">+关注</Link>
                <Link to="/" target="_blank" className="name">{item.get('writerName')}</Link>
                <p>写了 {this.setNum(item.get('wirteWord'))} 字 · {item.get('like')} 喜欢 </p>
              </li>
            )
          })}
          </ul>
          <Link to="/" className="find-more">查看全部 >></Link>
      </WriterWrapper>
    )
  }
}
const mapState = (state) => {
  return {
    writer:state.getIn(['home','writer'])
  }
}
export default connect(mapState, null)(Writer)