import React, { Component } from 'react'
import { HeaderContainer, HeaderWrapper, Logo, Container, NavItem, Search, RightNav,SearchInfo,SearchTitleSwitch,SearchKeyList,SearchKey} from './style.js'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators} from '../../pages/login/store/'
import { Link } from 'react-router-dom'
class Header extends Component{
  
  getShowSearch (){
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
    const pageList=[];
    const newList=list.toJS()
    if (newList.length){
      for (let i = (page - 1) * 10; i < page * 10; i++){
        if (newList[i]){
         pageList.push(<SearchKey key={newList[i]}>{newList[i]}</SearchKey>)
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        热门搜索
        <SearchTitleSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
          <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe786;</i>
          换一批
        </SearchTitleSwitch>
        <SearchKeyList>
         {pageList}
        </SearchKeyList>
      </SearchInfo>
      )
    }else {
      return null
    }
  }
  render(){
    const { focused, handleFocuse, handleBlur, list, login, logout} = this.props
    return (
      <HeaderContainer>
        <HeaderWrapper>
          <Link to='/'>
            <Logo />
          </Link>
          <Container>
            <NavItem className="left active"><Link to='/'>首页</Link></NavItem>
            <NavItem className="left"><Link to='/'>下载APP</Link></NavItem>
            <Search className={focused ? 'focused':''} >
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <input type="text" placeholder="搜索" onFocus={()=>{handleFocuse(list)}} onBlur={handleBlur} />
                </CSSTransition>
                <i className="iconfont searchBtn">&#xe623;</i>
              {this.getShowSearch()}
            </Search>
            {
              !login ?  <NavItem className="right"><Link to='/login'>登录</Link></NavItem> :
              <NavItem className="right" onClick={logout}><a>退出</a></NavItem>
            }
           
            <NavItem className="right"><a><i className="iconfont" style={{fontSize:'25px'}}>&#xe636;</i></a></NavItem>
            <RightNav>
              <li><a href="/" className="login">注册</a></li>
              <li><a href="/" className="reg"><i className="iconfont">&#xe689;</i>写文章</a></li>
            </RightNav>
          </Container>
        </HeaderWrapper>
      </HeaderContainer>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login'])
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    handleFocuse(list){
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseIn())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if (originAngle){
        originAngle = parseInt(originAngle)
      }else{
        originAngle=0;
      }
      spin.style.transform='rotate('+ (originAngle + 360) + 'deg)'
      let nextPage=0;
      if (page < totalPage) {
        nextPage = page + 1;
      }else{
        nextPage = 1;
      }
      dispatch(actionCreators.changePage(nextPage))
    },
    logout () {
      dispatch(loginActionCreators.login(false))
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Header)