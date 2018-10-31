import React, {Component} from 'react'
import {FooterWrapper} from './style'
class Footer extends Component {
    render() {
        return (
            <div className="container">
                <FooterWrapper>
                    <div className="footer-link">
                        <a href="http://www.jianshu.com/c/jppzD2" >关于简书</a><em> · </em><a href="http://www.jianshu.com/contact">联系我们</a><em> · </em><a href="http://www.jianshu.com/c/bfeec2e13990">加入我们</a><em> · </em><a href="http://www.jianshu.com/p/fc1c113e5b6b">简书出版</a><em> · </em><a href="http://www.jianshu.com/press">品牌与徽标</a><em> · </em><a href="http://www.jianshu.com/faqs">帮助中心</a><em> · </em><a href="http://www.jianshu.com/p/cabc8fa39830">合作伙伴</a>  
                    </div>
                    <div className="footer-info">
                        ©2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">沪公网安备31010402002252号 / </a>
                        举报电话：021-34770013 / 
                    </div>
                </FooterWrapper>
            </div>
        )
    }
}
export default Footer