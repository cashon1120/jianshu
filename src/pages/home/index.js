import React,{ PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommer from './components/Recommer'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Home extends PureComponent {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"
                    alt="banner"
                    src="http://upload.jianshu.io/admin_banners/web_images/4486/240ebd0212e4fce11577abbe3169c9345637ee58.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommer />
                    <Writer />
                </HomeRight>
                {this.props.showScroll && <BackTop onClick={this.backToTop}>TOP</BackTop>}
            </HomeWrapper>
        )
    }
    backToTop (){
        let scrollTop=document.documentElement.scrollTop;
        let timer = setInterval(()=>{
            scrollTop=scrollTop-10;
            if (scrollTop<=0){
                scrollTop=0;
                clearInterval(timer)
            }else{
                window.scrollTo(0,scrollTop)
            }
        },1);
        
    }
    componentDidMount (){
        this.props.setHomeData()
        this.bindEvents()
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTop)
    }
}
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => {
    return {
        setHomeData(){
            dispatch(actionCreators.setHomeData());
        },
        changeScrollTop (){
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.setScrollShow(true))
            } else {
                dispatch(actionCreators.setScrollShow(false))
            }
        }
    }
}
export default connect(mapState,mapDispatch)(Home)