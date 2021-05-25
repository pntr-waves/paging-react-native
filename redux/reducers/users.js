import * as ActionTypes from '../actions/actionTypes'

const init = {
    users:[{name: "ngva"}]
}
export const users = (state=init, action) => {
    switch(action.type){
        case ActionTypes.ADD_USER: {
            state.users.push(action.payload)
            return {...state, users:state.users}
        }
        default:{
            return state
        }
    }
}
