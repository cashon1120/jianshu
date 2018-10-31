import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    data:{}
})
export default (state = defaultState, action) => {
    switch (action.type) {
       case actionTypes.GET_DETAIL:
       return state.set('data',action.data)
        default:
            return state
    }
}