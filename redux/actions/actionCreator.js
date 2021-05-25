import * as ActionTypes from './actionTypes'

export const addUser = (user)=> ({
    type: ActionTypes.ADD_USER,
    payload: user
})