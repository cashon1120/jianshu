import {
    fromJS
} from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    topicList: [],
    list: [],
    writer: [],
    page: 1,
    showScroll: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        //获取首页数据
        case actionTypes.SET_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.data.topicList),
                list: fromJS(action.data.list),
                writer: fromJS(action.data.writer),
            });
        //加载更多
        case actionTypes.LOAD_MORE_DATA:
            return state.merge({
                list: state.get('list').concat(action.data),
                page: action.nextPage
            });
        //回到顶部
        case actionTypes.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        //返回默认数据
        default:
            return state
    }
}