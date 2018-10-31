import styled from 'styled-components' 
export const LoginWrapper = styled.div`
    width:100%;
    position:fixed;
    height:100%;
    top:0;
    left:0;
    background:#f1f1f1;
    text-align:center;
`;
export const Main = styled.div`
    position:relative;
    h4 {
        font-size: 18px;
    }
    width: 400px;
    margin: 100px auto 0;
    padding: 50px 50px 60px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    .title {
        margin: 0 auto 50px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
        b {
            padding: 10px;
        }
        a{
            padding: 10px;
            &.active {
                font-weight: 700;
                color: #ea6f5a;
                border-bottom: 2px solid #ea6f5a;
            }
        }
    }
    .js-sign-in-container {
        text-align: center;
        font-size: 14px;
        input {
            border-bottom: none;
            border-radius: 4px 4px 0 0;
            width: 100%;
            height: 50px;
            margin-bottom: 0;
            padding: 4px 12px 4px 12px;
            border: 1px solid #c8c8c8;
            border-radius: 0 0 4px 4px;
            background-color: hsla(0,0%,71%,.1);
            vertical-align: middle;
            box-sizing:border-box;
            font-size:14px;
            outline:none;
        }
        button {
            background: #3194d0;
            margin-top: 30px;
            width: 100%;
            padding: 9px 18px;
            font-size: 18px;
            border: none;
            border-radius: 25px;
            color: #fff;
            cursor: pointer;
            outline: none;
            display: block;
            clear: both;
        }
        .account {
            input {
                border-radius: 4px 4px 0 0;
                border-bottom:0;
            }
        }
    }
    .hasError {
        position:absolute;
        bottom:20px;
        color:red;
        width:100%;
        box-sizing:border-box;
        left:0;
    }
`;