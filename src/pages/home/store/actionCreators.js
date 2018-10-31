import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeDataType = (data) => ({
    type: actionTypes.SET_HOME_DATA,
    data
})
const loadMoreList = (data,nextPage) => ({
    type: actionTypes.LOAD_MORE_DATA,
    data:fromJS(data),
    nextPage
})
export const setHomeData = (dispatch) => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            dispatch(changeHomeDataType(res.data.data))
        })
    }
}

export const loadMore = (page) => {
    return (dispatch) => {
        axios.get('/api/moreList.json',{params:{page:page}}).then((res) => {
            dispatch(loadMoreList(res.data.data,page+1))
        })
    }
}

export const setScrollShow = (show) => ({
    type:actionTypes.TOGGLE_SCROLL_SHOW,
    show
})