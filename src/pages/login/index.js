import React,{ PureComponent } from 'react'
import { LoginWrapper, Main } from './style'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store/'
class Login extends PureComponent {
    render () {
        const { loginStatus } = this.props;
        if (!loginStatus){
            return (
                <LoginWrapper>
                    <Main>
                        <h4 className="title">
                            <div className="normal-title">
                                <a className="active" href="/">登录</a>
                                <b>·</b>
                                <a id="js-sign-up-btn" className="" href="/">注册</a>
                            </div>
                        </h4>
                        <div className="js-sign-in-container">
                            <div className="input-prepend account">
                                <input placeholder="手机号或邮箱" type="text" ref={(input) => {this.account=input}} />
                            </div>

                            <div className="input-prepend password">
                                <input placeholder="密码" type="password" ref={(input) => {this.password=input}}/>
                            </div>

                            <button onClick={()=> {this.props.login(true,this.account,this.password)}} className="sign-in-button" id="sign-in-form-submit-btn" type="button">
                            登录
                            </button>
                            {this.props.hasError ? <span className="hasError">账号或者密码不能为空</span> : null}
                        </div>
                    </Main>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}
const mapState = (state) => ({
    loginStatus: state.getIn(['login','login']),
    hasError:state.getIn(['login','hasError'])
})

const mapDispatch = (dispatch) => {
    return {
        login (flag,account,password) {
            const name=account.value, pwd=password.value;
            if (name === '' || pwd === ''){
                dispatch(actionCreators.showError())
                return;
            }
            dispatch(actionCreators.login(flag,name,pwd))
        }
    }
}
export default connect(mapState,mapDispatch)(Login)