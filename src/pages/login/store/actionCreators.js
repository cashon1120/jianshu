import * as actionTypes from './actionTypes'
export const login = (flag,account,password) => ({
    type: actionTypes.LOGIN,
    value: flag
})
export const showError = () => ({
    type: actionTypes.SHOW_ERROR
})
