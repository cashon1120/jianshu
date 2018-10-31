import axios from 'axios'
import * as actionTypes from './actionTypes'
import {
    fromJS
} from 'immutable'

const getDetailType = (data) => ({
    type: actionTypes.GET_DETAIL,
    data: fromJS(data)
})
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id ).then((res) => {
            dispatch(getDetailType(res.data.data))
        })
    }
}