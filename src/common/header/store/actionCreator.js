import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
const changeList = (data) => {
    return {
        type: actionTypes.SEARCH_LIST,
        data: fromJS(data),
        totalPage:Math.ceil(data.length/10)
    }
}

export const searchFocus = () => {
    return {
        type: actionTypes.SEARCH_FOCUS
    }
}

export const searchBlur = () => {
    return {
        type: actionTypes.SEARCH_BLUR
    }
}

export const mouseIn = () => {
    return {
        type:actionTypes.MOUSE_IN
    }
}
export const mouseLeave= () => {
    return {
        type:actionTypes.MOUSE_OUT
    }
}
export const changePage = (page) => {
    return {
        type:actionTypes.CHANGE_PAGE,
        page
    }
}
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data))
        }).catch(() => {
            console.log('请求失败')
        })
    }
}