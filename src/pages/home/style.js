import styled from 'styled-components'
export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    padding-top:30px;
    overflow:hidden;
`;
export const HomeLeft=styled.div`
    width:625px;
    float:left;
    .banner-img {
        width:625px;
        height:270px;
    }
`;
export const HomeRight=styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
`
export const TopicItem=styled.div`
    float:left;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    background:#f7f7f7;
    padding-right:10px;
    margin:0 18px 18px 0;
    img {
        float:left
        width:30px;
        height:30px;
        border-radius:3px 0 0 3px;
        margin-right:10px;
    }
`
export const ListWrapper=styled.ul`
    border-top: 1px solid #f0f0f0;
    .load-more{
        cursor:pointer;
        width: 100%;
        border-radius: 20px;
        background-color: #a5a5a5;
        height: 40px;
        margin: 30px auto 60px;
        padding: 10px 15px;
        text-align: center;
        font-size: 15px;
        color: #fff;
        background-color: #a5a5a5;
        display: block;
        &:hover {
            background:#a0a0a0;
        }
    }
`
export const ListItem= styled.li`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 20px 2px 25px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    overflow:hidden;
    .content {
        float:left;
        width:480px;
    }
    .title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .meta {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        a,span {
            color:#b4b4b4;
            margin-right:10px;
        }
        a:hover {
            color:#000;
        }
        .iconfont {
            font-size:12px;
            margin-right:2px;
        }
    }
    img {
        float:right;
        width:125px;
        height:100px;
        border-radius:3px;
    }
`
export const RecommerWrapper=styled.div`
    margin-top:-4px;
    a {
        display:block;
        img {
            width:280px;
            height:50px;
            margin-bottom:4px;
        }
    }
`;
export const WriterWrapper=styled.div`
    padding-top:30px;
    .find-more {
        display:block;
        text-align:center;
        padding: 7px 7px 7px 12px;
        margin-top: 20px;
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
    }
    .writer-title {
        color:#666;
        font-size:14px;
        height:20px;
        .iconfont{
            font-size:12px;
            margin-right:3px;
        }
    }
    .writer-list{
        overflow:hidden;
        li{
            line-height:20px;
            margin-top:15px;
            overflow:hidden;
            position:relative;
            .avater {
                float: left;
                width: 48px;
                height: 48px;
                margin-right: 10px;
                img {
                    width: 100%;
                    height: 100%;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                }
            }
            .follow {
                float: right;
                margin-top: 5px;
                padding: 0;
                font-size: 13px;
                color: #42c02e;
            }
            .name {
                padding-top: 5px;
                margin-right: 60px;
                font-size: 14px;
                display: block;
            }
            p {
                margin-top: 2px;
                font-size: 12px;
                color: #969696;
            }
        }
    }
`;
export const WriterSwitch=styled.div`
    float:right;
`;
export const BackTop=styled.div`
    position:fixed;
    width:60px;
    height:60px;
    bottom:50px;
    right:20px;
    border:1px solid #eee;
    background:#fafafa;
    color:#666;
    line-height:60px;
    text-align:center;
    cursor:pointer;
    transition:all .2s;
    &:hover {
        background:#ededed;
    }
`
