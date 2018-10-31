import {
    fromJS
} from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    login: false,
    hasError: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return state.set('login', action.value).set('hasError', false)
        case actionTypes.SHOW_ERROR:
            return state.set('hasError', true)
        default:
            return state
    }
}