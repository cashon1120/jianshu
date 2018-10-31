import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'
export const HeaderContainer = styled.div `
    height:56px;
    width:100%;
    margin:auto;
    position:relative;
    border-bottom:1px solid #f0f0f0;
`
export const HeaderWrapper = styled.div `
    height:56px;
    max-width:1440px;
    margin:auto;
    position:relative;
`
export const Logo = styled.div`
    display:block;
    position:absolute;
    width:100px;
    left:0;
    height:56px;
    background:url(${LogoPic});
    background-size:100% auto;
`
export const Container = styled.div `
    width:980px;
    margin:0 auto;
    height:100%;
    position:relative;
    padding-right:130px;
`

export const NavItem = styled.div`
    height:56px;
    line-height:56px;
    padding:0;
    color:#333;
    font-size:17px;
    margin-right:10px;
    cursor:pointer;
    a {
        padding:0 15px;
    }
    &:hover {
        background:#eee;
    }
    &.left {
        float:left;
    }
    &.right {
        float:right;
        a {
            color:#969696;
        }
    }
    &.active a{
        color:#ea6f5a;
        &:hover {
            background:none;
        }
    }
`

export const Search = styled.div `
    float:left;
    padding:10px 0;
    position:relative;
    margin-left:20px;
    color:#666;
    font-size:14px;
    &>input {
        width:240px;
        background:#eee;
        padding:0px 40px 0 20px;
        height:36px;
        line-height:36px;
        border:1px solid #eee;
        border-radius:40px;
        box-sizing:border-box;
        outline:none;
        &::placeholder{
            color:#999;
        }
        &.slide-enter {
            width:240px;
            transition:all .2s ease-out;
        }
        &.slide-enter-active {
            width:320px;
        }
        &.slide-enter-done {
            width:320px;
        }
        &.slide-exit {
            width:320px;
            transition:all .2s ease-out;
        }
        &.slide-exit-active {
            width:240px;
        }
        &.slide-exit-done {
            width:240px;
        }
    }
     .iconfont {
        position:absolute;
        right:6px;
        top:13px;
        font-size:20px;
        border-radius:100%;
        padding:5px;
    }
    &.focused {
        &>i{
            position:absolute;
            right:6px;
            top:13px;
            font-size:20px;
            border-radius:100%;
            padding:5px;
            background:#eee;
        }
    }
`
export const SearchInfo = styled.div `
    background:#fff;
    position:absolute;
    left:0;
    top:56px;
    border-radius:5px;
    width:240px;
    padding:20px 20px 10px 20px;
    box-shadow:0 0 5px rgba(0,0,0,.3);
    font-size:14px;
    color:#666;
    &::before {
        content:'';
        display:block;
        position:absolute;
        left:15px;
        top:-20px;
        width:0;
        height:0;
        border:10px solid transparent;
        border-bottom:10px solid #ddd;
    }
    &::after {
        content:'';
        display:block;
        position:absolute;
        left:15px;
        top:-19px;
        width:0;
        height:0;
        border:10px solid transparent;
        border-bottom:10px solid #fff;
    }
`
export const SearchTitleSwitch = styled.span `
    float:right;
    cursor:pointer;
    position:relative;
    padding-left:18px;
    &:hover {
        color:#333;
    }
    .iconfont {
        position:absolute;
        left:0;
        top:1px;
        font-size:12px;
        padding:0;
        margin:0;
        right:auto;
    }
    .spin {
        display:block;
        float:left;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`
export const SearchKeyList = styled.ul `
    overflow:auto;
    padding:15px 0 0 0;
    clear:both;
`
export const SearchKey = styled.li `
    float:left;
    display:inline-block;
    padding:3px 6px;
    border-radius:2px;
    border:1px solid #eee;
    margin:0 12px 12px 0;
    color:#666;
    font-size:12px;
    cursor:pointer;
    &:hover {
        color:#333;
        border:1px solid #aaa;
    }
`
export const RightNav = styled.ul `
    display:block;
    position:absolute;
    right:-130px;
    padding-top:10px;
    &>li {
        display:inline-block;
        float:left;
        margin-right:25px;
        &>a {
            display:block;
            padding:0 25px;
            height:38px;
            line-height:36px;
            text-decoration:none;
            border-radius:20px;
            &.login {
                background:#fff;
                border:1px solid rgba(236,97,73,.7);
                color:#ea6f5a;
            }
            &.reg {
                border:1px solid #ea6f5a;
                color:#fff;
                background:#ea6f5a;
            }
        }
    }
`